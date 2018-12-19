import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BeerService } from './beer.service';
import { Beer, BeerComment, BeerRating, CommentBeerInput, CreateBeerInput, RateBeerInput } from '../graphql.schema.generated';
import { GraphQLResolveInfo } from 'graphql';

@Resolver('Beer')
export class BeerResolvers {
  constructor(private readonly beerService: BeerService) {}

  @Query()
  getBeers(@Args() args, @Info() info: GraphQLResolveInfo): Promise<Beer[]> {
    return this.beerService.getAllBeers(args, info);
  }

  @Query()
  beer(@Args('id') id: string, @Info() info: GraphQLResolveInfo): Promise<Beer> {
    return this.beerService.getBeer(id, info);
  }

  @Mutation()
  createBeer(@Args('createBeerInput') args: CreateBeerInput, @Info() info: GraphQLResolveInfo): Promise<Beer> {
    return this.beerService.createBeer(args, info);
  }

  @Mutation()
  commentBeer(@Args('commentBeerInput') args: CommentBeerInput, @Info() info: GraphQLResolveInfo): Promise<BeerComment> {
    return this.beerService.commentBeer(args, info);
  }

  @Mutation()
  rateBeer(@Args('rateBeerInput') args: RateBeerInput, @Info() info: GraphQLResolveInfo): Promise<BeerRating> {
    return this.beerService.rateBeer(args, info);
  }
}
