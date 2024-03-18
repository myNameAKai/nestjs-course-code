import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { CommonPipeService } from './common-pipe.service';
import { ParseEnumPipe } from '@nestjs/common/pipes';
import { Param } from '@nestjs/common/decorators';
import { CustomPipePipe } from 'src/custom-pipe.pipe';

enum Roles {
  'admin' = 'ADMIN',
  'test' = 'TEST',
}

@Controller('common-pipe')
export class CommonPipeController {
  constructor(private readonly commonPipeService: CommonPipeService) {}

  // @Get(':id')
  // async findOne(
  //   @Param(
  //     'id',
  //     new ParseIntPipe({
  //       errorHttpStatusCode: HttpStatus.NOT_FOUND,
  //     }),
  //   )
  //   id: number,
  // ) {
  //   console.log('🚀 ~ CommonPipeController ~ findOne ~ id:', id);
  // }

  @Get('bool')
  async boolPipe(@Query('bool', ParseBoolPipe) bool: boolean) {
    return {
      data: bool,
    };
  }

  @Get('array')
  async arrayPipe(
    @Query(
      'array',
      new ParseArrayPipe({
        separator: '*',
        optional: true,
      }),
    )
    arr: [],
  ) {
    return {
      data: arr,
    };
  }

  @Get('enum')
  async enumPipe(@Query('enum', new ParseEnumPipe(Roles)) role: Roles) {
    return {
      data: role,
    };
  }

  @Get('/uuid/:uuid')
  async uuidPipe(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return {
      data: uuid,
    };
  }
  @Get('default')
  async defaultPipe(@Query('name', new DefaultValuePipe('阿凯')) name: string) {
    return {
      data: name,
    };
  }

  @Get('custom')
  async customPipe(@Query('name', CustomPipePipe) name: string) {
    return {
      data: name,
    };
  }
}
