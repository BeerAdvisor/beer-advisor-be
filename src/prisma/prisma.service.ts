import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.bindings.generated';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: 'https://eu1.prisma.sh/kotn01/demo/dev',
      debug: true,
    });
  }
}
