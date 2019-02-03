import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { CreateBreweryInput } from '../graphql.schema.generated';
import { BreweryService } from './brewery.service';
import { AdminGuard } from '../auth/admin.guard';

@Resolver('Brewery')
export class BreweryResolver {
  constructor(private readonly breweryService: BreweryService) {}

  @Query()
  breweries(@Args() args, @Info() info: GraphQLResolveInfo) {
    return this.breweryService.getBreweries(args, info);
  }

  @Query()
  brewery(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    return this.breweryService.getBeer(id, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, AdminGuard)
  createBrewery(@Args('createBreweryInput') args: CreateBreweryInput, @Info() info: GraphQLResolveInfo) {
    return this.breweryService.createBrewery(args, info);
  }
}
