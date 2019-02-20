import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLResolveInfo } from 'graphql';
import { ChangeBeerInput, CommentBeerInput, CreateBeerInput, FindBeerInput, RateBeerInput } from '../graphql.schema.generated';
import { Beer, BeerChange, BeerComment, User } from '../prisma/prisma.bindings.generated';
import { ErrorService } from '../error/error.service';
import { calculateAverageRating } from '../shared/helpers/calculate-avg-rating';
import { mapIncludedIn } from './beer.helper';
import { connectId } from '../shared/helpers/map-connect-ids';

@Injectable()
export class BeerService {
  constructor(private readonly prisma: PrismaService, private readonly errorService: ErrorService) {}

  getAllBeers(args, info: GraphQLResolveInfo): Promise<Beer[]> {
    return this.prisma.query.beers(args, info);
  }

  getBeer(id: string, info: GraphQLResolveInfo): Promise<Beer> {
    return this.prisma.query.beer({ where: { id } }, info);
  }

  findBeers({ name, type, strong, brewery }: FindBeerInput, info: GraphQLResolveInfo): Promise<Beer[]> {
    return this.prisma.query.beers(
      {
        where: {
          AND: {
            name_contains: name,
            strong_contains: strong,
            ...(type && { type: { name_contains: type } }),
            ...(brewery && { brewery: { name_contains: brewery } }),
          },
        },
      },
      info,
    );
  }

  createBeer(beer: CreateBeerInput, user: User, info: GraphQLResolveInfo): Promise<Beer> {
    return this.prisma.mutation.createBeer(
      {
        data: {
          name: beer.name,
          photo: beer.photo,
          strong: beer.strong,
          createdBy: connectId(user.id),
          type: connectId(beer.typeId),
          brewery: connectId(beer.breweryId),
          includedIn: mapIncludedIn(beer.includeIn),
        },
      },
      info,
    );
  }

  commentBeer(comment: CommentBeerInput, user: User, info: GraphQLResolveInfo): Promise<BeerComment> {
    return this.prisma.mutation.createBeerComment(
      {
        data: {
          comment: comment.comment,
          user: connectId(user.id),
          beer: connectId(comment.beerId),
        },
      },
      info,
    );
  }

  async rateBeer(rating: RateBeerInput, user: User, info: GraphQLResolveInfo): Promise<Beer> {
    // TODO how to make one transaction
    const userRating = await this.prisma.query.beerRatings({
      where: { AND: { beer: { id: rating.beerId }, user: { id: user.id } } },
    });

    await this.prisma.mutation.upsertBeerRating({
      where: { id: userRating && userRating.length && userRating[0].id },
      create: {
        rating: rating.rating,
        beer: connectId(rating.beerId),
        user: connectId(user.id),
      },
      update: {
        rating: rating.rating,
      },
    });

    const avg = calculateAverageRating(await this.prisma.query.beerRatings({ where: { beer: { id: rating.beerId } } }));
    return this.prisma.mutation.updateBeer({ data: { avgRating: avg }, where: { id: rating.beerId } }, info);
  }

  async changeBeer(change: ChangeBeerInput, user: User, info: GraphQLResolveInfo): Promise<BeerChange> {
    return this.prisma.mutation.createBeerChange(
      {
        data: {
          name: change.name,
          strong: change.strong,
          photo: change.photo,
          brewery: connectId(change.breweryId),
          user: connectId(user.id),
          beer: connectId(change.beerId),
          type: connectId(change.typeId),
        },
      },
      info,
    );
  }
}
