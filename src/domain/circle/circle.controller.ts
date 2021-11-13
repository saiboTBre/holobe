import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CircleService } from './circle.service';
import { CreateCircleDto } from './dto/create-circle.dto';
import { UpdateCircleDto } from './dto/update-circle.dto';
import { Circle } from './entities/circle.entity';

@ApiBearerAuth()
@ApiTags('circle')
@Controller('circle')
export class CircleController {
  constructor(private readonly circleService: CircleService) {}

  @ApiOperation({ summary: 'Create circle' })
  @Post()
  create(@Body() createCircleDto: CreateCircleDto) {
    return this.circleService.create(createCircleDto);
  }

  @Get()
  findAll() {
    return this.circleService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Circle,
  })
  findOne(@Param('id') id: ObjectId) {
    return this.circleService.findOne(id);
  }

  //@Put(':id')
  //update(@Param('id') id: number, @Body() updateCircleDto: UpdateCircleDto) {
  //return this.circleService.update(id, updateCircleDto);
  //}

  //@Delete(':id')
  //remove(@Param('id') id: number) {
  //return this.circleService.remove(id);
  //}
}
