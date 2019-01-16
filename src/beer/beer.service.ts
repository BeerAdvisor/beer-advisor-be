import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLResolveInfo } from 'graphql';
import { ChangeBeerInput, CommentBeerInput, CreateBeerInput, RateBeerInput } from '../graphql.schema.generated';
import { mapConnectIds } from '../shared/helpers';
import { Beer, BeerChange, BeerComment, BeerRating, User } from '../prisma/prisma.bindings.generated';

@Injectable()
export class BeerService {
  constructor(private readonly prisma: PrismaService) {}

  getAllBeers(args, info: GraphQLResolveInfo): Promise<string> {
    return this.prisma.query.beers(args, info);
  }

  getBeer(id: string, info: GraphQLResolveInfo): Promise<Beer> {
    return this.prisma.query.beer({ where: { id } }, info);
  }

  createBeer(beer: CreateBeerInput, user: User, info: GraphQLResolveInfo): Promise<Beer> {
    return this.prisma.mutation.createBeer(
      {
        data: {
          name: beer.name,
          photo: beer.photo,
          type: beer.type,
          strong: beer.strong,
          createdBy: { connect: { id: user.id } },
          ...(beer.breweryId && { brewery: { connect: { id: beer.breweryId } } }), // TODO wtf not working without spread
          bars: { connect: mapConnectIds(beer.barIds) },
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
          user: { connect: { id: user.id } },
          beer: { connect: { id: comment.beerId } },
        },
      },
      info,
    );
  }

  async rateBeer(rating: RateBeerInput, user: User, info: GraphQLResolveInfo): Promise<BeerRating> {
    const ratings = await this.prisma.query.beerRatings({
      where: { AND: { beer: { id: rating.beerId }, user: { id: user.id } } },
    });

    return this.prisma.mutation.upsertBeerRating(
      {
        where: { id: ratings && ratings.length && ratings[0].id },
        create: {
          rating: rating.rating,
          beer: { connect: { id: rating.beerId } },
          user: { connect: { id: user.id } },
        },
        update: {
          rating: rating.rating,
        },
      },
      info,
    );
  }

  changeBeer(change: ChangeBeerInput, user: User, info: GraphQLResolveInfo): Promise<BeerChange> {
    return this.prisma.mutation.createBeerChange(
      {
        data: {
          field: change.field,
          newValue: change.newValue,
          user: { connect: { id: user.id } },
          beer: { connect: { id: change.beerId } },
        },
      },
      info,
    );
  }
}
