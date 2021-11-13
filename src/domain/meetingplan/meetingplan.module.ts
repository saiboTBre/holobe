import { Module } from '@nestjs/common';
import { MeetingplanService } from './meetingplan.service';
import { MeetingplanController } from './meetingplan.controller';

@Module({
  controllers: [MeetingplanController],
  providers: [MeetingplanService]
})
export class MeetingplanModule {}
