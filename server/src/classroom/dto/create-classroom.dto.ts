import { AttendanceList } from 'src/attendance-list/entities/attendance-list.entity';
import { IUserEntity } from 'src/user/entities/user.entity';

export class CreateClassroomDto {
  name: string;
  theme: string;
  subject: string;
  students: IUserEntity[];
  teachers: IUserEntity[];
  attendances: AttendanceList[];
}
