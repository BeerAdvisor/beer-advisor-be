import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ErrorService } from '../error/error.service';
import { GraphQLResolveInfo } from 'graphql';
import { Brewery } from '../prisma/prisma.bindings.generated';
import { CreateBreweryInput } from '../graphql.schema.generated';

@Injectable()
export class BreweryService {
  constructor(private readonly prisma: PrismaService, private readonly errorService: ErrorService) {
  }

  getBreweries(args, info: GraphQLResolveInfo): Promise<Brewery[]> {
    return this.prisma.query.breweries(args, info);
  }

  getBeer(id: string, info: GraphQLResolveInfo): Promise<Brewery> {
    return this.prisma.query.brewery({ where: { id } }, info);
  }

  createBrewery(brewery: CreateBreweryInput, info: GraphQLResolveInfo): Promise<Brewery> {
    return this.prisma.mutation.createBrewery({ data: { ...brewery } }, info);
  }
}
