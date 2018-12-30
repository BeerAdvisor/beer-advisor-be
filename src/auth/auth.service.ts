import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthenticationError } from 'apollo-server-errors';
import { JwtData } from '../shared/interfaces/jwt-data.interface';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validate(jwtData: JwtData): Promise<any> {
    const user = await this.prisma.query.user({ where: { id: jwtData.id } });
    if (!user) {
      throw new AuthenticationError('Authenticate validation error');
    }
    return user;
  }
}
