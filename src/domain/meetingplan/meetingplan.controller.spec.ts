import { Test, TestingModule } from '@nestjs/testing';
import { MeetingplanController } from './meetingplan.controller';
import { MeetingplanService } from './meetingplan.service';

describe('MeetingplanController', () => {
  let controller: MeetingplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetingplanController],
      providers: [MeetingplanService],
    }).compile();

    controller = module.get<MeetingplanController>(MeetingplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
