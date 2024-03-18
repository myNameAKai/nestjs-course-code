import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('🚀 ~ CustomPipePipe ~ transform ~ value:', value);
    console.log('🚀 ~ CustomPipePipe ~ transform ~ metadata:', metadata);
    return value;
  }
}
