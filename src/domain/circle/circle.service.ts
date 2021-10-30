import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCircleDto } from './dto/create-circle.dto';
import { UpdateCircleDto } from './dto/update-circle.dto';
import { Circle, CircleDocument } from './schemas/circle.schema';
import { Model } from 'mongoose';

@Injectable()
export class CircleService {
  constructor(
    @InjectModel(Circle.name) private circleModel: Model<CircleDocument>,
  ) {}
  async create(createCircleDto: CreateCircleDto): Promise<Circle> {
    return new this.circleModel(createCircleDto);
  }

  findAll() {
    return `This action returns all circle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} circle`;
  }

  update(id: number, updateCircleDto: UpdateCircleDto) {
    return `This action updates a #${id} circle`;
  }

  remove(id: number) {
    return `This action removes a #${id} circle`;
  }
}
