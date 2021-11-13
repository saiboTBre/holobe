import { PartialType } from '@nestjs/mapped-types';
import { CreateTensionDto } from './create-tension.dto';

export class UpdateTensionDto extends PartialType(CreateTensionDto) {}
