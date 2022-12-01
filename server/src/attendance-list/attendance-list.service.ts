import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { ClassroomService } from 'src/classroom/classroom.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateAttendanceListDto } from './dto/create-attendance-list.dto';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';
import { AttendanceList } from './entities/attendance-list.entity';

@Injectable()
export class AttendanceListService {
  private _attendanceList: AttendanceList[] = [];
  constructor(private readonly classroomService: ClassroomService) {}
  async create(
    createAttendanceListDto: CreateAttendanceListDto,
  ): Promise<AttendanceList> {
    await this.classroomService.findOne(createAttendanceListDto.classroomId);

    const Today = new Date(Date.now()).toISOString().slice(0, 10);
    const formatedToday =
      Today.slice(8, 10) + '/' + Today.slice(5, 7) + '/' + Today.slice(0, 4);

    const EndDateToAttendance = 2 * 60 * 1000;
    const attendanceToday: AttendanceList = {
      ...createAttendanceListDto,
      id: randomUUID(),
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + EndDateToAttendance),
      students: [],
      day: formatedToday,
    };

    this._attendanceList.push(attendanceToday);

    return Promise.resolve(attendanceToday);
  }

  async findAll() {
    return this._attendanceList;
  }

  async findOne(id: string): Promise<AttendanceList> {
    const findedAttendanceList = this._attendanceList.find(
      (attendanceList) => attendanceList.id === id,
    );
    return findedAttendanceList;
  }

  async update(id: number, updateAttendanceListDto: UpdateAttendanceListDto) {
    return `This action updates a #${id} attendanceList`;
  }

  async RegisterOnAttendanceList(
    attendanceListId: string,
    userId: string,
  ): Promise<string> {
    const FindedAttendanceList = await this.findOne(attendanceListId);
    const ActualDate = new Date(Date.now());
    if (ActualDate.getTime() > FindedAttendanceList.endDate.getTime()) {
      throw new Exception(Exceptions.InvalidData, 'Dançou');
    }
    return 'Chamada concluida';
  }

  async remove(id: number) {
    return `This action removes a #${id} attendanceList`;
  }
}
