import { Test, TestingModule } from '@nestjs/testing';
import { BarResolver } from './bar.resolver';

describe('BarResolver', () => {
  let resolver: BarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarResolver],
    }).compile();

    resolver = module.get<BarResolver>(BarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
