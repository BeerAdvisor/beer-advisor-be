import { Injectable } from '@nestjs/common';
import { UserInputError } from 'apollo-server-errors';
import { ValidationError } from 'class-validator';

@Injectable()
export class ErrorService {
  public throwValidationErrors(validationErrors?: ValidationError[]) {
    throw new UserInputError(
      `UserInputError`,
      { validationErrors },
    );
  }
}
