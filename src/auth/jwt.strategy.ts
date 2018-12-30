import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { JwtData } from '../shared/interfaces/jwt-data.interface';

const cookieExtractor = (req: Request): string | null => {
  let token = null;
  if (req && req.cookies) token = req.cookies['token'];
  return token;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'secret', // TODO
    });
  }

  validate(jwtData: JwtData) {
    return this.authService.validate(jwtData);
  }
}
