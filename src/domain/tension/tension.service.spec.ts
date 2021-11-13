import { Test, TestingModule } from '@nestjs/testing';
import { TensionService } from './tension.service';

describe('TensionService', () => {
  let service: TensionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TensionService],
    }).compile();

    service = module.get<TensionService>(TensionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
