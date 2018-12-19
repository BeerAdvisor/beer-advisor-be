import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public update(args): Promise<any> {
    return this.prisma.mutation.updateUser(args);
  }

  public find(where): Promise<any> {
    return this.prisma.query.user({ where });
  }

  public exists(where): Promise<boolean> {
    return this.prisma.exists.User(where);
  }

  public async create(user): Promise<any> {
    const password = await bcryptjs.hash(user.password, 10);

    return await this.prisma.mutation.createUser({
      data: {
        ...user,
        password,
      },
    });
  }
}
