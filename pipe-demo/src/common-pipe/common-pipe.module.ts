import { Module } from '@nestjs/common';
import { CommonPipeService } from './common-pipe.service';
import { CommonPipeController } from './common-pipe.controller';

@Module({
  controllers: [CommonPipeController],
  providers: [CommonPipeService],
})
export class CommonPipeModule {}
