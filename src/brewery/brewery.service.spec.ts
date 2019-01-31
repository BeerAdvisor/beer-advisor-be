import { Test, TestingModule } from '@nestjs/testing';
import { BreweryService } from './brewery.service';

describe('BreweryService', () => {
  let service: BreweryService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreweryService],
    }).compile();
    service = module.get<BreweryService>(BreweryService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
