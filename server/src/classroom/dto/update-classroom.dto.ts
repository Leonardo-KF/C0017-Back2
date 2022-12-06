import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClassroomDto } from './create-classroom.dto';

export class UpdateClassroomDto extends PartialType(CreateClassroomDto) {
  @ApiProperty()
  id: string;
}
