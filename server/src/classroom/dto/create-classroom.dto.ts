import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClassroomDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  theme: string;
  @ApiProperty()
  @IsString()
  subject: string;
  @ApiProperty()
  teachersIds?: string[];
  @ApiProperty()
  studentsIds?: string[];
}
