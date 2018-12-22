import { Injectable } from '@nestjs/common';
import { ApolloError, UserInputError } from 'apollo-server-errors';
import { ValidationError } from 'class-validator';

@Injectable()
export class ErrorService {
  public throwValidationErrors(validationErrors?: ValidationError[]) {
    throw new UserInputError(
      `UserInputError`,
      { validationErrors },
    );
  }

  public throwCustomError(message: string, code?: string, props?: Record<string, any>) {
    throw new ApolloError(message, code, props);
  }
}
