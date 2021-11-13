import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TensionService } from './tension.service';
import { CreateTensionDto } from './dto/create-tension.dto';
import { UpdateTensionDto } from './dto/update-tension.dto';

@Controller('tension')
export class TensionController {
  constructor(private readonly tensionService: TensionService) {}

  @Post()
  create(@Body() createTensionDto: CreateTensionDto) {
    return this.tensionService.create(createTensionDto);
  }

  @Get()
  findAll() {
    return this.tensionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tensionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTensionDto: UpdateTensionDto) {
    return this.tensionService.update(+id, updateTensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tensionService.remove(+id);
  }
}
