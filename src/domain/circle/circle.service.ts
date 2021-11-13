import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCircleDto } from './dto/create-circle.dto';
import { UpdateCircleDto } from './dto/update-circle.dto';
import { Circle, CircleDocument } from './schemas/circle.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class CircleService {
  constructor(
    @InjectModel(Circle.name) private circleModel: Model<CircleDocument>,
  ) {}

  async create(createCircleDto: CreateCircleDto): Promise<Circle> {
    return new this.circleModel(createCircleDto).save();
  }

  async findAll(): Promise<Circle[]> {
    return this.circleModel.find().exec();
  }

  async findOne(id: ObjectId) {
    return this.circleModel.findById(id);
  }

  //async update(id: ObjectId, updateCircleDto: UpdateCircleDto) {
  //return this.circleModel.updateOne({ id }, { $set: updateCircleDto });
  //}

  //async remove(id: ObjectId) {
  //return this.circleModel.deleteOne({ id });
  //}
}
