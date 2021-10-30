import { Module } from '@nestjs/common';
import { CircleService } from './circle.service';
import { CircleController } from './circle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Circle, CircleSchema } from './schemas/circle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Circle.name, schema: CircleSchema }]),
  ],
  controllers: [CircleController],
  providers: [CircleService],
})
export class CircleModule {}
