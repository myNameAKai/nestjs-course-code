import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class MyValidationPipePipe implements PipeTransform {
  @Optional()
  @Inject('validation_options')
  private options: object;
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    console.log('🚀 ~ MyValidationPipePipe ~ options:', this.options);
    console.log('🚀 ~ MyValidationPipePipe ~ transform ~ metatype:', metatype);
    if (!metatype) return value;
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException('参数错误');
    }
    return value;
  }
}
