import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterOnAttendanceListDto {
  @ApiProperty()
  @IsString()
  attendanceListId: string;
  @ApiProperty()
  @IsString()
  userId: string;
}
