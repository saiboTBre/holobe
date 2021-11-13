import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingplanDto } from './create-meetingplan.dto';

export class UpdateMeetingplanDto extends PartialType(CreateMeetingplanDto) {}
