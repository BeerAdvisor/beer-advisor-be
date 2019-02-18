import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLResolveInfo } from 'graphql';
import {
  BeerField,
  ChangeBeerInput,
  CommentBeerInput,
  CreateBeerInput,
  FindBeerInput,
  RateBeerInput,
  UpvoteBeerChangeInput,
} from '../graphql.schema.generated';
import { mapConnectIds } from '../shared/helpers/map-connect-ids';
import { Beer, BeerChange, BeerComment, User } from '../prisma/prisma.bindings.generated';
import { ErrorService } from '../error/error.service';
import { ErrorCodes } from '../shared/enums/error-codes.enum';
import { calculateAverageRating } from '../shared/helpers/calculate-avg-rating';

@Injectable()
export class BeerService {
  constructor(private readonly prisma: PrismaService, private readonly errorService: ErrorService) {}

  // getAllBeers(args, info: GraphQLResolveInfo): Promise<Beer[]> {
  //   return this.prisma.query.beers(args, info);
  // }
  //
  // getBeer(id: string, info: GraphQLResolveInfo): Promise<Beer> {
  //   return this.prisma.query.beer({ where: { id } }, info);
  // }
  //
  // findBeers({ name, type, strong, brewery }: FindBeerInput, info: GraphQLResolveInfo): Promise<Beer[]> {
  //   return this.prisma.query.beers(
  //     {
  //       where: {
  //         AND: {
  //           name_contains: name,
  //           strong_contains: strong,
  //           ...(type && { type: { name_contains: type } }),
  //           ...(brewery && { brewery: { name_contains: brewery } }),
  //         },
  //       },
  //     },
  //     info,
  //   );
  // }
  //
  // createBeer(beer: CreateBeerInput, user: User, info: GraphQLResolveInfo): Promise<Beer> {
  //   return this.prisma.mutation.createBeer(
  //     {
  //       data: {
  //         name: beer.name,
  //         photo: beer.photo,
  //         strong: beer.strong,
  //         createdBy: { connect: { id: user.id } },
  //         ...(beer.typeId && { type: { connect: { id: beer.typeId } } }),
  //         ...(beer.breweryId && { brewery: { connect: { id: beer.breweryId } } }),
  //         bars: { connect: mapConnectIds(beer.barIds) },
  //       },
  //     },
  //     info,
  //   );
  // }
  //
  // commentBeer(comment: CommentBeerInput, user: User, info: GraphQLResolveInfo): Promise<BeerComment> {
  //   return this.prisma.mutation.createBeerComment(
  //     {
  //       data: {
  //         comment: comment.comment,
  //         user: { connect: { id: user.id } },
  //         beer: { connect: { id: comment.beerId } },
  //       },
  //     },
  //     info,
  //   );
  // }
  //
  // async rateBeer(rating: RateBeerInput, user: User, info: GraphQLResolveInfo): Promise<Beer> {
  //   // TODO how to make one transaction
  //   const userRating = await this.prisma.query.beerRatings({
  //     where: { AND: { beer: { id: rating.beerId }, user: { id: user.id } } },
  //   });
  //
  //   await this.prisma.mutation.upsertBeerRating({
  //     where: { id: userRating && userRating.length && userRating[0].id },
  //     create: {
  //       rating: rating.rating,
  //       beer: { connect: { id: rating.beerId } },
  //       user: { connect: { id: user.id } },
  //     },
  //     update: {
  //       rating: rating.rating,
  //     },
  //   });
  //
  //   const avg = calculateAverageRating(await this.prisma.query.beerRatings({ where: { beer: { id: rating.beerId } } }));
  //   return this.prisma.mutation.updateBeer({ data: { avgRating: avg }, where: { id: rating.beerId } }, info);
  // }
  //
  // async changeBeer(change: ChangeBeerInput, user: User, info: GraphQLResolveInfo): Promise<BeerChange> {
  //   // TODO refactoring
  //   if (change.field === BeerField.BREWERY && !(await this.prisma.exists.Brewery({ id: change.newValue }))) {
  //     this.errorService.throwCustomError(`Brewery "${change.newValue}" does not exist`, ErrorCodes.NOT_FOUND);
  //   }
  //
  //   if (change.field === BeerField.TYPE && !(await this.prisma.exists.BeerType({ id: change.newValue }))) {
  //     this.errorService.throwCustomError(`BeerType "${change.newValue}" does not exist`, ErrorCodes.NOT_FOUND);
  //   }
  //
  //   return this.prisma.mutation.createBeerChange(
  //     {
  //       data: {
  //         field: change.field,
  //         newValue: change.newValue,
  //         user: { connect: { id: user.id } },
  //         beer: { connect: { id: change.beerId } },
  //       },
  //     },
  //     info,
  //   );
  // }
  //
  // async upvoteBeerChange(upvote: UpvoteBeerChangeInput, user: User, info: GraphQLResolveInfo): Promise<BeerChangeUpvote | Beer> {
  //   // TODO how to make one transaction
  //   const userAlreadyUpvoted = await this.prisma.exists.BeerChangeUpvote({
  //     AND: { user: { id: user.id }, beerChange: { id: upvote.beerChangeId } },
  //   });
  //
  //   if (userAlreadyUpvoted) this.errorService.throwCustomError('User already upvoted the change', ErrorCodes.ALREADY_UPVOTED);
  //
  //   const totalUpvotes = await this.prisma.query.beerChangeUpvotes({ where: { beerChange: { id: upvote.beerChangeId } } });
  //
  //   // TODO move constatnt to config
  //   if (totalUpvotes.length > 1) return this.applyBeerChange(upvote.beerChangeId, info);
  //
  //   return this.prisma.mutation.createBeerChangeUpvote(
  //     {
  //       data: {
  //         user: { connect: { id: user.id } },
  //         beerChange: { connect: { id: upvote.beerChangeId } },
  //       },
  //     },
  //     info,
  //   );
  // }
  //
  // async applyBeerChange(changeId: string, info: GraphQLResolveInfo): Promise<Beer> {
  //   // TODO make one transaction
  //   const change = await this.prisma.query.beerChange(
  //     { where: { id: changeId } },
  //     `{ id field newValue beer { id } }`, // TODO make smth better then fucking string
  //   );
  //
  //   this.prisma.mutation.deleteBeerChange({ where: { id: changeId } });
  //
  //   // TODO refactoring
  //   if (change.field === BeerField.BREWERY) {
  //     return this.prisma.mutation.updateBeer(
  //       {
  //         where: { id: change.beer.id },
  //         data: {
  //           brewery: {
  //             connect: {
  //               id: change.newValue,
  //             },
  //           },
  //         },
  //       },
  //       info,
  //     );
  //   }
  //
  //   if (change.field === BeerField.TYPE) {
  //     return this.prisma.mutation.updateBeer(
  //       {
  //         where: { id: change.beer.id },
  //         data: {
  //           type: {
  //             connect: {
  //               id: change.newValue,
  //             },
  //           },
  //         },
  //       },
  //       info,
  //     );
  //   }
  //
  //   return this.prisma.mutation.updateBeer(
  //     {
  //       where: { id: change.beer.id },
  //       data: {
  //         [change.field.toString().toLowerCase()]: change.newValue,
  //       },
  //     },
  //     info,
  //   );
  // }
}
