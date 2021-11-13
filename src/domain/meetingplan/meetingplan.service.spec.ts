import { Test, TestingModule } from '@nestjs/testing';
import { MeetingplanService } from './meetingplan.service';

describe('MeetingplanService', () => {
  let service: MeetingplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingplanService],
    }).compile();

    service = module.get<MeetingplanService>(MeetingplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
