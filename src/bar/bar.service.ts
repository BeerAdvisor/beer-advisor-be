import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { CreateBarInput } from '../graphql.schema.generated';
import { Bar, User } from '../prisma/prisma.bindings.generated';
import { PrismaService } from '../prisma/prisma.service';
import { ErrorService } from '../error/error.service';
import { connectId } from '../shared/helpers/map-connect-ids';
import { createBeerList } from './bar.helper';

@Injectable()
export class BarService {
  constructor(private readonly prisma: PrismaService, private readonly errorService: ErrorService) {}

  getAllBars(args: any, info: GraphQLResolveInfo): Promise<Bar[]> {
    return this.prisma.query.bars(args, info);
  }

  getBar(id: string, info: GraphQLResolveInfo): Promise<Bar> {
    return this.prisma.query.bar({ where: { id } }, info);
  }

  createBar(args: CreateBarInput, user: User, info: GraphQLResolveInfo): Promise<Bar> {
    const { name, lat, long, address, openTime, closeTime, phone, photos, beers } = args;
    return this.prisma.mutation.createBar(
      {
        data: {
          name,
          lat,
          long,
          address,
          openTime,
          closeTime,
          phone,
          photos: { set: photos },
          beerList: { create: createBeerList(beers) },
          createdBy: connectId(user.id),
        },
      },
      info,
    );
  }
}
