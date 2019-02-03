import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthenticationError } from 'apollo-server-errors';
import { JwtData } from '../shared/interfaces/jwt-data.interface';
import { User } from '../prisma/prisma.bindings.generated';
import { Role } from '../graphql.schema.generated';
import { ErrorService } from '../error/error.service';
import { ErrorCodes } from '../shared/enums/error-codes.enum';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly error: ErrorService) {}

  async validate({ id }: JwtData): Promise<User> {
    const user = await this.prisma.query.user({ where: { id } });
    if (!user) {
      throw new AuthenticationError('Authenticate validation error');
    }
    return user;
  }

  handleAdmin(user: User): void {
    if (user.role !== Role.ADMIN) {
      this.error.throwCustomError('Forbidden', ErrorCodes.FORBIDDEN);
    }
  }
}
