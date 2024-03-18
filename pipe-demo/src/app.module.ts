import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonPipeModule } from './common-pipe/common-pipe.module';

@Module({
  imports: [CommonPipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
