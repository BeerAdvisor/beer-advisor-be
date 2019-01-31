import { Module } from '@nestjs/common';
import { BreweryService } from './brewery.service';
import { PrismaModule } from '../prisma/prisma.module';
import { BreweryResolver } from './brewery.resolver';
import { BreweryModel } from './brewery.model';
import { ErrorModule } from '../error/error.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [BreweryService, BreweryResolver, BreweryModel],
  imports: [PrismaModule, ErrorModule, AuthModule],
})
export class BreweryModule {}
