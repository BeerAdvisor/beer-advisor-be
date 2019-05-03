import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'express';
import * as bcryptjs from 'bcryptjs';

import { UserService } from './user.service';
import { LoginInput, User } from '../graphql.schema.generated';
import { ResGql } from '../shared/decorators/req-res-graphql.decorator';
import { SignUpInputDto } from './dto/sign-up-input.dto';
import { ErrorService } from '../error/error.service';
import { ErrorCodes } from '../shared/enums/error-codes.enum';
import { JwtService } from '@nestjs/jwt';
import { GraphQLResolveInfo } from 'graphql';
import { GqlUser } from '../shared/decorators/user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(private readonly user: UserService, private readonly errorService: ErrorService, private readonly jwt: JwtService) {}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  getUserData(@Info() info: GraphQLResolveInfo, @GqlUser() user: User) {
    return this.user.find({ id: user.id }, info);
  }

  @Mutation()
  async login(@Args('loginInput') { email, password }: LoginInput, @ResGql() res: Response) {
    const user = await this.user.find({ email });
    if (!user) this.throwLoginError();

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) this.throwLoginError();

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }

  @Mutation()
  async signup(@Args('signUpInput') userDto: SignUpInputDto, @ResGql() res: Response) {
    const emailExists = await this.user.exists({ email: userDto.email });
    if (emailExists) this.errorService.throwCustomError('Email is already in use', ErrorCodes.EMAIL_IN_USE);

    const user = await this.user.create(userDto);

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }

  private throwLoginError() {
    this.errorService.throwCustomError('Email or password incorrect', ErrorCodes.EMAIL_OR_PAS_INCORRECT);
  }
}
