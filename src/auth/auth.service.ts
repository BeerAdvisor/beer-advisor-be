import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthenticationError } from 'apollo-server-errors';
import { JwtData } from '../shared/interfaces/jwt-data.interface';
import { User } from '../prisma/prisma.bindings.generated';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validate({ id }: JwtData): Promise<User> {
    const user = await this.prisma.query.user({ where: { id } });
    if (!user) {
      throw new AuthenticationError('Authenticate validation error');
    }
    return user;
  }
}
