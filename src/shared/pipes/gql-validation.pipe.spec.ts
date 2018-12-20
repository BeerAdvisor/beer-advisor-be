import { ValidationPipe } from './gql-validation.pipe';

describe('ValidationPipe', () => {
  it('should be defined', () => {
    expect(new ValidationPipe()).toBeTruthy();
  });
});
