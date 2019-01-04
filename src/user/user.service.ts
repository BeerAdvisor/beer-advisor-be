import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcryptjs from 'bcryptjs';
import { User } from '../prisma/prisma.bindings.generated';
import { SignUpInputDto } from './dto/sign-up-input.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public update(args): Promise<User | null> {
    return this.prisma.mutation.updateUser(args);
  }

  public find(where): Promise<User> {
    return this.prisma.query.user({ where });
  }

  public exists(where): Promise<boolean> {
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
