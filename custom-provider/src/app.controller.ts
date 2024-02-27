import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject('person1')
  private readonly person1: string;

  @Inject('person2')
  private readonly person2: AppService;
  @Inject('person3')
  private readonly person3: { msg: string };
  @Inject('person4')
  private readonly person4: string;
  @Get()
  getHello(): string {
    console.log('🚀 ~ AppController ~ person1:', this.person1);
    console.log('🚀 ~ AppController ~ person2:', this.person2.getHello());
    console.log('🚀 ~ AppController ~ person3:', this.person3);
    console.log('🚀 ~ AppController ~ person4:', this.person4);
    return this.appService.getHello();
  }
}
