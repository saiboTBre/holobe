import { Injectable } from '@nestjs/common';
import { CreateTensionDto } from './dto/create-tension.dto';
import { UpdateTensionDto } from './dto/update-tension.dto';

@Injectable()
export class TensionService {
  create(createTensionDto: CreateTensionDto) {
    return 'This action adds a new tension';
  }

  findAll() {
    return `This action returns all tension`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tension`;
  }

  update(id: number, updateTensionDto: UpdateTensionDto) {
    return `This action updates a #${id} tension`;
  }

  remove(id: number) {
    return `This action removes a #${id} tension`;
  }
}
