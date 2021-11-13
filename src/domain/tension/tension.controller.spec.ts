import { Test, TestingModule } from '@nestjs/testing';
import { TensionController } from './tension.controller';
import { TensionService } from './tension.service';

describe('TensionController', () => {
  let controller: TensionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TensionController],
      providers: [TensionService],
    }).compile();

    controller = module.get<TensionController>(TensionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
