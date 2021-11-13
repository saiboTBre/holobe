import { Module } from '@nestjs/common';
import { TensionService } from './tension.service';
import { TensionController } from './tension.controller';

@Module({
  controllers: [TensionController],
  providers: [TensionService]
})
export class TensionModule {}
