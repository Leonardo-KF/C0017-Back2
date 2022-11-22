import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './userInput.dto';

export class PartialUserDto extends PartialType(UserDto) {
  id: string;
}
