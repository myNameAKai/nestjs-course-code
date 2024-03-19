import { Module, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'validation_options',
      useFactory: () => {
        return {
          name: 'akai',
        };
      },
    },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class UserModule {}
