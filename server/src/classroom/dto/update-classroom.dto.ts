import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClassroomDto } from './create-classroom.dto';

export class UpdateClassroomDto extends PartialType(CreateClassroomDto) {
  @ApiProperty()
  id: string;
}

export class AddStudentClassroomDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  studentId: string;
}

export class AddTeacherClassroomDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  teacherId: string;
}
