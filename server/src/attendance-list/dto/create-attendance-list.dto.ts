import { IUserEntity } from 'src/user/entities/user.entity';

export class CreateAttendanceListDto {
  classroomId: string;
  students: IUserEntity[];
  startDate: Date;
  endDate: Date;
  day: Date;
}
