import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAttendanceListDto {
  @ApiProperty()
  @IsString()
  classroomId: string;
}
