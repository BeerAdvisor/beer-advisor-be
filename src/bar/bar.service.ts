import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { CommentBarInput, CreateBarInput, FindBarInput, RateBarInput } from '../graphql.schema.generated';
import { Bar, Beer, BeerComment, User, BarWhereInput } from '../prisma/prisma.bindings.generated';
import { PrismaService } from '../prisma/prisma.service';
import { FourSquareService } from '../fourSquare/fourSquare.service';
import { ErrorService } from '../error/error.service';
import { connectId } from '../shared/helpers/map-connect-ids';
import { createBeerList, normalizeTime, mapFoursquareVenue } from './bar.helper';
import { calculateAverageRating } from '../shared/helpers/calculate-avg-rating';
import { map } from 'ramda';

@Injectable()
export class BarService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fourSquare: FourSquareService,
    private readonly errorService: ErrorService) {}

  getAllBars(args: any, info: GraphQLResolveInfo): Promise<Bar[]> {
    return this.prisma.query.bars(args, info);
  }

  getBar(id: string, info: GraphQLResolveInfo): Promise<Bar> {
    return this.prisma.query.bar({ where: { id } }, info);
  }

  createBar(args: CreateBarInput, user: User | undefined, info: GraphQLResolveInfo): Promise<Bar> {
    const { name, foursquareId, lat, long, address, openTime, closeTime, phone, photos, beers } = args;

    return this.prisma.mutation.createBar(
      {
        data: {
          foursquareId,
          name,
          lat,
          long,
          address: address || 'testaddress', // TODO get address from lat/long
          openTime: normalizeTime(openTime),
          closeTime: normalizeTime(closeTime),
          phone,
          photos: { set: photos },
          beerList: { create: createBeerList(beers) },
          createdBy: user ? connectId(user.id) : null,
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

    const fourSquareBars = await this.fourSquare.findBars(args);
    map(async fourSquareBar => {
      const barExists = await this.prisma.exists.Bar({
        foursquareId: fourSquareBar.id,
      });

      console.log(`${fourSquareBar.name} ${barExists ? '' : 'does not'} exists`);
      if (!barExists) {
        console.log(`bar was created: ${fourSquareBar.name}`);
        await this.createBar(mapFoursquareVenue(fourSquareBar), null, info);
      }
    }, fourSquareBars);

    return this.prisma.query.bars({ where: { name_contains: args.name, ...timeLimit } }, info);
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
