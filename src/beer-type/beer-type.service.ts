import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { ChangeBeerTypeInput, CreateBeerTypeInput } from '../graphql.schema.generated';
import { BeerType, User } from '../prisma/prisma.bindings.generated';
import { PrismaService } from '../prisma/prisma.service';
import { ErrorService } from '../error/error.service';
import { mapConnectIds } from '../shared/helpers/map-connect-ids';

@Injectable()
export class BeerTypeService {
  constructor(private readonly prisma: PrismaService, private readonly errorService: ErrorService) {}

  getAllBeerTypes(args: any, info: GraphQLResolveInfo): Promise<BeerType[]> {
    return this.prisma.query.beerTypes(args, info);
  }

  getBeerType(id: string, info: GraphQLResolveInfo): Promise<BeerType> {
    return this.prisma.query.beerType({ where: { id } }, info);
  }

  createBeerType(args: CreateBeerTypeInput, user: User, info: GraphQLResolveInfo): Promise<BeerType> {
    return this.prisma.mutation.createBeerType(
      {
        data: {
          name: args.name,
          description: args.description,
          beers: { connect: mapConnectIds(args.beerIds) },
        },
      },
      info,
    );
  }

  changeBeerType(args: ChangeBeerTypeInput, user: User, info: GraphQLResolveInfo): Promise<BeerType> {
    return this.prisma.mutation.updateBeerType(
      {
        where: { id: args.beerTypeId },
        data: {
          description: args.newDescription,
        },
      },
      info,
    );
  }
}
