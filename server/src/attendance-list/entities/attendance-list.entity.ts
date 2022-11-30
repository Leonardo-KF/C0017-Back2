import { IUserEntity } from 'src/user/entities/user.entity';
import { CreateAttendanceListDto } from '../dto/create-attendance-list.dto';

export class AttendanceList extends CreateAttendanceListDto {
  id: string;
  startDate: Date;
  endDate: Date;
  students: IUserEntity[] = [];
  day: string;
}
