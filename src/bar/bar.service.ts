import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { CommentBarInput, CreateBarInput, FindBarInput, RateBarInput } from '../graphql.schema.generated';
import { Bar, Beer, BeerComment, User, BarWhereInput } from '../prisma/prisma.bindings.generated';
import { PrismaService } from '../prisma/prisma.service';
import { ErrorService } from '../error/error.service';
import { connectId } from '../shared/helpers/map-connect-ids';
import { createBeerList, normalizeTime } from './bar.helper';
import { calculateAverageRating } from '../shared/helpers/calculate-avg-rating';
import { map } from 'ramda';

@Injectable()
export class BarService {
  constructor(private readonly prisma: PrismaService, private readonly errorService: ErrorService) {}

  getAllBars(args: any, info: GraphQLResolveInfo): Promise<Bar[]> {
    return this.prisma.query.bars(args, info);
  }

  getBar(id: string, info: GraphQLResolveInfo): Promise<Bar> {
    return this.prisma.query.bar({ where: { id } }, info);
  }

  createBar(args: CreateBarInput, user: User, info: GraphQLResolveInfo): Promise<Bar> {
    const { name, lat, long, address, openTime, closeTime, phone, photos, beers } = args;

    return this.prisma.mutation.createBar(
      {
        data: {
          name,
          lat,
          long,
          address: address || 'testaddress', // TODO get address from lat/long
          openTime: normalizeTime(openTime),
          closeTime: normalizeTime(closeTime),
          phone,
          photos: { set: photos },
          beerList: { create: createBeerList(beers) },
          createdBy: connectId(user.id),
        },
      },
      info,
    );
  }

  async findBars(args: FindBarInput, info: GraphQLResolveInfo): Promise<Bar[]> {
    // TODO add open-close time logic, add distance search logic
    let timeLimit: BarWhereInput;
    if (args.openNow) {
      const now = normalizeTime(new Date());
      timeLimit = {
        openTime_lt: now,
        closeTime_gt: now,
      };
    }

    const clientId = 'client_id=S4WRAGGZW4C4L4IVOLTOTJSFRYBKDWVLLR4H1TJY223FAAZY';
    const version = 'v=20190811';
    const clientSecret = 'client_secret=RVGHYZHTIZUCI5AR3ZEMXDBW5L3G3KUCTASPABQ0W0SDX41Q';
    const latLon = 'll=40.7484,-73.9857';

    const result = await fetch(`https://api.foursquare.com/v2/venues/search?${latLon}&${clientId}&${clientSecret}&${version}`).then(res =>
      res.json(),
    );

    return map(({ id, name, location: { address = '', lat, lng }}) => ({
      id,
      name,
      address,
      lat,
      long: lng,
      photos: [''],
      beerList: {
        id: '12',
        bar: null,
        items: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     }), result.response.venues);
    // return this.prisma.query.bars({ where: { name_contains: args.name, ...timeLimit } }, info);
  }

  // TODO refactor with bar rateBeer
  async rateBar(rating: RateBarInput, user: User, info: GraphQLResolveInfo): Promise<Beer> {
    // TODO how to make one transaction
    const userRating = await this.prisma.query.barRatings({
      where: { AND: { bar: { id: rating.barId }, user: { id: user.id } } },
    });

    await this.prisma.mutation.upsertBarRating({
      where: { id: userRating && userRating.length && userRating[0].id },
      create: {
        rating: rating.rating,
        bar: connectId(rating.barId),
        user: connectId(user.id),
      },
      update: {
        rating: rating.rating,
      },
    });

    const avg = calculateAverageRating(await this.prisma.query.barRatings({ where: { bar: { id: rating.barId } } }));
    return this.prisma.mutation.updateBar({ data: { avgRating: avg }, where: { id: rating.barId } }, info);
  }

  commentBar(comment: CommentBarInput, user: User, info: GraphQLResolveInfo): Promise<BeerComment> {
    return this.prisma.mutation.createBarComment(
      {
        data: {
          comment: comment.comment,
          user: connectId(user.id),
          bar: connectId(comment.barId),
        },
      },
      info,
    );
  }
}
