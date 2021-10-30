import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type CircleDocument = Circle & Document;

@Schema()
export class Circle {
  @Prop()
  name: string;

  @Prop()
  purpose: string;

  @Prop()
  domains: string[];
  @Prop()
  accs: string[];
  @Prop()
  competences: string[];
  @Prop()
  policies: string[];
}

export const CircleSchema = SchemaFactory.createForClass(Circle);
