import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { CreateBarInput } from '../graphql.schema.generated';
import { User } from '../prisma/prisma.bindings.generated';

@Injectable()
export class BarService {
  getAllBars(args: any, info: GraphQLResolveInfo) {}

  getBar(id: string, info: GraphQLResolveInfo) {}

  createBar(args: CreateBarInput, user: User, info: GraphQLResolveInfo) {}
}
