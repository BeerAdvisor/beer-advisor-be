import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChangeBeerTypeInput, CreateBeerTypeInput } from '../graphql.schema.generated';
import { GraphQLResolveInfo } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { GqlUser } from '../shared/decorators/user.decorator';
import { User } from '../prisma/prisma.bindings.generated';
import { BeerTypeService } from './beer-type.service';
import { AdminGuard } from '../auth/admin.guard';

@Resolver('BeerType')
export class BeerTypeResolver {
  constructor(private readonly beerTypeService: BeerTypeService) {
  }

  @Query()
  beerTypes(@Args() args, @Info() info: GraphQLResolveInfo) {
    return this.beerTypeService.getAllBeerTypes(args, info);
  }

  @Query()
  beerType(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    return this.beerTypeService.getBeerType(id, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, AdminGuard)
  changeBeerType(@Args('changeBeerTypeInput') args: ChangeBeerTypeInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.beerTypeService.changeBeerType(args, user, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, AdminGuard)
  createBeerType(@Args('createBeerTypeInput') args: CreateBeerTypeInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.beerTypeService.createBeerType(args, user, info);
  }
}
