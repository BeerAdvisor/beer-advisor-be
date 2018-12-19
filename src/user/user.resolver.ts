import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Response } from 'express';
import * as bcryptjs from 'bcryptjs';
import * as jsonwebtoken from 'jsonwebtoken';

import { UserService } from './user.service';
import { AuthPayload, LoginInput, SignUpInput, User } from '../graphql.schema.generated';
import { ResGql } from '../shared/decorators/req-res-graphql.decorator';

@Resolver('User')
export class UserResolver {
  constructor(private readonly user: UserService) {}

  @Mutation()
  async login(@Args('loginInput') { email, password }: LoginInput, @ResGql() res: Response): Promise<AuthPayload> {
    const user = await this.user.find({ email });
    if (!user) {
      throw new Error('no user'); // TODO errors
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw new Error('not valid');
    }

    const jwt = jsonwebtoken.sign({ userId: user.id }, 'secret'); // TODO secret
    res.cookie('token', jwt, { httpOnly: true });

    return { user };
  }

  @Mutation()
  async signup(@Args('signUpInput') { email, name, password }: SignUpInput, @ResGql() res: Response): Promise<AuthPayload> {
    const errors: any = {};

    if (password.length < 6) {
      errors.password = `Password must be at least 6 characters`;
    }

    const emailExists = await this.user.exists({ email });
    if (emailExists) {
      errors.email = `Email ${email} is already in use`;
    }

    const usernameExists = await this.user.exists({ name });
    if (usernameExists) {
      errors.username = `Username ${name} is already in use`;
    }

    if (false) {
      throw new Error('hm'); // todo
    }

    const user = await this.user.create({ email, name, password });

    const jwt = jsonwebtoken.sign({ userId: user.id }, 'secret'); // TODO secret
    res.cookie('token', jwt, { httpOnly: true });

    return { user };
  }
}
