import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.bindings.generated';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: 'https://eu1.prisma.sh/nikita-kot-5fc7f8/beer-advisor-be/dev',
      debug: true,
    });
  }
}
