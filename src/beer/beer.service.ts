import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLResolveInfo } from 'graphql';
import { Beer } from '../graphql.schema';

@Injectable()
export class BeerService {
  constructor(private readonly prisma: PrismaService) {}

  createBeer(
    beer,
    info: GraphQLResolveInfo,
  ): Promise<Beer> {
    return this.prisma.mutation.createBeer({ data: beer }, info);
  }

  getAllBeers(args, info: GraphQLResolveInfo): Promise<Beer[]> {
    return this.prisma.query.beers(args, info);
  }
}
