import { AttendanceList } from 'src/attendance-list/entities/attendance-list.entity';
import { IUserEntity } from 'src/user/entities/user.entity';
import { CreateClassroomDto } from '../dto/create-classroom.dto';

export class Classroom extends CreateClassroomDto {
  id: string;
  students: IUserEntity[];
  teachers: IUserEntity[];
  attendances: AttendanceList[];
}
