import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { CreateBreweryInput } from '../graphql.schema.generated';
import { BreweryService } from './brewery.service';
import { AuthService } from '../auth/auth.service';
import { GqlUser } from '../shared/decorators/user.decorator';
import { User } from '../prisma/prisma.bindings.generated';

@Resolver('Brewery')
export class BreweryResolver {
  constructor(private readonly breweryService: BreweryService, private readonly authService: AuthService) {
  }

  @Query()
  breweries(@Args() args, @Info() info: GraphQLResolveInfo) {
    return this.breweryService.getBreweries(args, info);
  }

  @Query()
  brewery(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    return this.breweryService.getBeer(id, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  createBrewery(@Args('createBreweryInput') args: CreateBreweryInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    this.authService.handleAdmin(user);
    return this.breweryService.createBrewery(args, info);
  }
}
