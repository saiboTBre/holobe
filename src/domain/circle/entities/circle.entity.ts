import { ApiProperty } from '@nestjs/swagger';
export class Circle {
  @ApiProperty({ example: 'JI', description: 'The name of the Circle' })
  name: string;
}
