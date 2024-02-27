import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // 1.基础用法
    AppService,
    // 2.useValue 注入
    {
      provide: 'person1',
      useValue: 'person1',
    },
    {
      provide: 'person2',
      useClass: AppService,
    },
    {
      provide: 'person3',
      // 可支持异步
      useFactory: (person1: string, appService: AppService) => {
        return {
          msg: person1 + appService.getHello(),
        };
      },
      inject: ['person1', AppService],
    },
    {
      provide: 'person4',
      useExisting: 'person1',
    },
  ],
})
export class AppModule {}
