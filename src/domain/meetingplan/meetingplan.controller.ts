import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingplanService } from './meetingplan.service';
import { CreateMeetingplanDto } from './dto/create-meetingplan.dto';
import { UpdateMeetingplanDto } from './dto/update-meetingplan.dto';

@Controller('meetingplan')
export class MeetingplanController {
  constructor(private readonly meetingplanService: MeetingplanService) {}

  @Post()
  create(@Body() createMeetingplanDto: CreateMeetingplanDto) {
    return this.meetingplanService.create(createMeetingplanDto);
  }

  @Get()
  findAll() {
    return this.meetingplanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingplanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingplanDto: UpdateMeetingplanDto) {
    return this.meetingplanService.update(+id, updateMeetingplanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingplanService.remove(+id);
  }
}
