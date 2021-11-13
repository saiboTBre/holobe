import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CircleDocument = Circle & Document;
@Schema()
export class Circle {
  @Prop()
  name: string;
  @Prop()
  purpose: string;
  @Prop([String])
  domains: string[];
  @Prop([String])
  accs: string[];
  @Prop([String])
  competences: string[];
  @Prop([String])
  policies: string[];
}
export const CircleSchema = SchemaFactory.createForClass(Circle);
