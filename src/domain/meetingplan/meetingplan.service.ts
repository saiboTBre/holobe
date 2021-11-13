import { Injectable } from '@nestjs/common';
import { CreateMeetingplanDto } from './dto/create-meetingplan.dto';
import { UpdateMeetingplanDto } from './dto/update-meetingplan.dto';

@Injectable()
export class MeetingplanService {
  create(createMeetingplanDto: CreateMeetingplanDto) {
    return 'This action adds a new meetingplan';
  }

  findAll() {
    return `This action returns all meetingplan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meetingplan`;
  }

  update(id: number, updateMeetingplanDto: UpdateMeetingplanDto) {
    return `This action updates a #${id} meetingplan`;
  }

  remove(id: number) {
    return `This action removes a #${id} meetingplan`;
  }
}
