import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';
import { MyValidationPipePipe } from './my-validation-pipe.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async createUser(@Body() createuser: CreateUser) {
    return {
      data: createuser,
    };
  }
}
