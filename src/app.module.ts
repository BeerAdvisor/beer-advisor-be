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
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: GqlValidationPipe,
    },
  ],
})
export class ApplicationModule {}
