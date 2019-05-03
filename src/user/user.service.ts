import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcryptjs from 'bcryptjs';
import { User, UserWhereInput, UserWhereUniqueInput } from '../prisma/prisma.bindings.generated';
import { SignUpInputDto } from './dto/sign-up-input.dto';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public update(args): Promise<User | null> {
    return this.prisma.mutation.updateUser(args);
  }

  public find(where: UserWhereUniqueInput, info?: GraphQLResolveInfo): Promise<User> {
    return this.prisma.query.user({ where }, info);
  }

  public exists(where: UserWhereInput): Promise<boolean> {
    return this.prisma.exists.User(where);
  }

  public async create(user: SignUpInputDto): Promise<User> {
    const password = await bcryptjs.hash(user.password, 10);

    return this.prisma.mutation.createUser({
      data: {
        ...user,
        password,
      },
    });
  }
}
