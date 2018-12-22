import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { AuthenticationError } from 'apollo-server-errors';
import { Request } from 'express';

const cookieExtractor = (req: Request) => {
  let token = null;
  if (req && req.cookies) token = req.cookies['token'];
  return token;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly user: UserService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'secret', // TODO
    });
  }

  async validate({ id }) {
    const user = await this.user.find({ id });
    if (!user) {
      throw new AuthenticationError('Must authenticate');
    }

    return user;
  }
}
