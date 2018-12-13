import { Args, Info, Query, Resolver, Mutation } from '@nestjs/graphql';
import { BeerService } from './beer.service';
import { Beer } from '../graphql.schema';

@Resolver('Beer')
export class BeerResolvers {
  constructor(private readonly beerService: BeerService) {}

  @Query()
  async getBeers(@Args() args, @Info() info): Promise<Beer[]> {
    return this.beerService.getAllBeers(args, info);
  }

  @Mutation('createBeer')
  async createBeer(@Args() args, @Info() info): Promise<Beer> {
    return this.beerService.createBeer(args, info);
  }
}
