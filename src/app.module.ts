import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';
import { BeerModule } from './beer/beer.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    BeerModule,
  ],
})
export class ApplicationModule {}
