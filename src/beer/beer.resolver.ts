import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BeerService } from './beer.service';
import { Beer, ChangeBeerInput, CommentBeerInput, CreateBeerInput, RateBeerInput } from '../graphql.schema.generated';
import { GraphQLResolveInfo } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { GqlUser } from '../shared/decorators/user.decorator';
import { User } from '../prisma/prisma.bindings.generated';

@Resolver('Beer')
export class BeerResolvers {
  constructor(private readonly beerService: BeerService) {}

  @Query()
  getBeers(@Args() args, @Info() info: GraphQLResolveInfo) {
    return this.beerService.getAllBeers(args, info);
  }

  @Query()
  beer(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    return this.beerService.getBeer(id, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  changeBeer(@Args('changeBeerInput') args: ChangeBeerInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.beerService.changeBeer(args, user, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  createBeer(@Args('createBeerInput') args: CreateBeerInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.beerService.createBeer(args, user, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  commentBeer(@Args('commentBeerInput') args: CommentBeerInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.beerService.commentBeer(args, user, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  rateBeer(@Args('rateBeerInput') args: RateBeerInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.beerService.rateBeer(args, user, info);
  }
}
