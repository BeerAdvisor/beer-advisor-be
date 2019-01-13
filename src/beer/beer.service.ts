import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLResolveInfo } from 'graphql';
import { CommentBeerInput, CreateBeerInput, RateBeerInput } from '../graphql.schema.generated';
import { mapConnectIds } from '../shared/helpers';
import { Beer, BeerRating, BeerComment, User } from '../prisma/prisma.bindings.generated';

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
          createdBy: { connect: { id: user.id } },
          ...(beer.breweryId && { brewery: { connect: { id: beer.breweryId } } }), // TODO wtf not working without spread
          bars: { connect: mapConnectIds(beer.barIds) },
        },
      },
      info,
    );
  }

  commentBeer(comment: CommentBeerInput, info: GraphQLResolveInfo): Promise<BeerComment> {
    return this.prisma.mutation.createBeerComment(
      {
        data: {
          comment: comment.comment,
          user: { connect: { id: 'user_id_here' } }, // TODO
          beer: { connect: { id: comment.beerId } },
        },
      },
      info,
    );
  }

  rateBeer(rating: RateBeerInput, info: GraphQLResolveInfo): Promise<BeerRating> {
    return this.prisma.mutation.createBeerRating(
      {
        data: {
          rating: rating.rating,
          user: { connect: { id: 'user_id_here' } }, // TODO
          beer: { connect: { id: rating.beerId } },
        },
      },
      info,
    );
  }
}
