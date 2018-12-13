import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Beer, BeerCreateInput } from '../prisma/prisma.bindings.generated';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class BeerService {
  constructor(private readonly prisma: PrismaService) {}

  createBeer(beer: { data: BeerCreateInput }, info: GraphQLResolveInfo): Promise<Beer> {
    return this.prisma.mutation.createBeer(beer, info);
  }

  getAllBeers(args, info: GraphQLResolveInfo): Promise<Beer[]> {
    return this.prisma.query.beers(args, info);
  }
}
