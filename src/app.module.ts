import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';
import { BeerModule } from './beer/beer.module';
import { UserModule } from './user/user.module';
import { ErrorModule } from './error/error.module';
import { APP_PIPE } from '@nestjs/core';
import { GqlValidationPipe } from './shared/pipes/gql-validation.pipe';
import { AuthModule } from './auth/auth.module';
import { BreweryModule } from './brewery/brewery.module';
import { BeerTypeModule } from './beer-type/beer-type.module';
import { BarModule } from './bar/bar.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    BeerModule,
    UserModule,
    ErrorModule,
    AuthModule,
    BreweryModule,
    BeerTypeModule,
    BarModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: GqlValidationPipe,
    },
  ],
})
export class ApplicationModule {}
