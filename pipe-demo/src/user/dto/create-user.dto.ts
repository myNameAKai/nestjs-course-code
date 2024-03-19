import { IsInt, Length } from 'class-validator';

export class CreateUser {
  username: string;
  @IsInt()
  age: number;
  password: string;
  @Length(10, 20, {
    message({ targetName, property, value, constraints }) {
      return `${targetName} 类的 ${property} 属性的值 ${value} 不满足约束: ${constraints}`;
    },
  })
  hobbies: string[];
}
