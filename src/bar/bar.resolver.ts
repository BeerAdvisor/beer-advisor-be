import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BarService } from './bar.service';
import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { CommentBarInput, CreateBarInput, FindBarInput, RateBarInput } from '../graphql.schema.generated';
import { GqlUser } from '../shared/decorators/user.decorator';
import { User } from '../prisma/prisma.bindings.generated';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver('Bar')
export class BarResolver {
  constructor(private readonly barService: BarService) {}

  @Query()
  bars(@Args() args, @Info() info: GraphQLResolveInfo) {
    return this.barService.getAllBars(args, info);
  }

  @Query()
  bar(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    return this.barService.getBar(id, info);
  }

  @Query()
  findBars(@Args('findBarInput') args: FindBarInput, @Info() info: GraphQLResolveInfo) {
    return this.barService.findBars(args, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  createBar(@Args('createBarInput') args: CreateBarInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.barService.createBar(args, user, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  commentBar(@Args('commentBarInput') args: CommentBarInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.barService.commentBar(args, user, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  rateBar(@Args('rateBarInput') args: RateBarInput, @Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.barService.rateBar(args, user, info);
  }
}
