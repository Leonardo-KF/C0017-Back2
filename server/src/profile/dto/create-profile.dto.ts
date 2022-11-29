import { ApiProperty } from '@nestjs/swagger';
import { isString } from 'class-validator';

export class CreateProfileDto {
  name: string;
  image: string;
}
