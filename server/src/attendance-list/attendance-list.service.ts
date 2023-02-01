import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { ClassroomService } from 'src/classroom/classroom.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { AttendanceListRespository } from './attendance-list.repository';
import { CreateAttendanceListDto } from './dto/create-attendance-list.dto';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';
import { AttendanceList } from './entities/attendance-list.entity';

@Injectable()
export class AttendanceListService {
  constructor(
    private readonly classroomService: ClassroomService,
    private readonly attendanceListRepository: AttendanceListRespository,
  ) {}

  async me(userId: string) {
    return await this.attendanceListRepository.myAttendancesLists(userId);
  }

  async create(
    createAttendanceListDto: CreateAttendanceListDto,
  ): Promise<AttendanceList> {
    await this.classroomService.findOne(
      createAttendanceListDto.classroomId,
      'teacher',
    );

    const Today = new Date(Date.now()).toISOString().slice(0, 10);
    const formatedToday =
      Today.slice(8, 10) + '/' + Today.slice(5, 7) + '/' + Today.slice(0, 4);

    const EndDateToAttendance = 10 * 60 * 1000;
    const attendanceToday: AttendanceList = {
      ...createAttendanceListDto,
      id: randomUUID(),
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + EndDateToAttendance),
      students: [],
      day: formatedToday,
    };

    return await this.attendanceListRepository.createAttendanceList(
      attendanceToday,
    );
  }

  async findAll() {
    return await this.attendanceListRepository.allAttendancesLists();
  }

  async findOne(id: string): Promise<AttendanceList> {
    const findedAttendanceList =
      await this.attendanceListRepository.attendanceListById(id);
    return findedAttendanceList;
  }

  async update(updateAttendanceListDto: UpdateAttendanceListDto) {
    return await this.attendanceListRepository.updateAttendanceList(
      updateAttendanceListDto,
    );
  }

  async RegisterOnAttendanceList(
    attendanceListId: string,
    userId: string,
  ): Promise<AttendanceList> {
    const FindedAttendanceList = await this.findOne(attendanceListId);
    const FindedClassroom = await this.classroomService.findOne(
      FindedAttendanceList.classroomId,
      'teacher',
    );
    const ActualDate = new Date(Date.now());
    if (ActualDate.getTime() > FindedAttendanceList.endDate.getTime()) {
      throw new Exception(Exceptions.InvalidData, 'Dançou');
    }

    const TrackStudents = new Map<string, any>();
    for (const student of FindedClassroom.students) {
      TrackStudents.set(student.id, { ...student });
    }

    if (TrackStudents.get(userId) === undefined) {
      throw new Exception(
        Exceptions.InvalidData,
        'This student not found in classroom',
      );
    }

    const dataToReturn =
      await this.attendanceListRepository.updateAttendanceList({
        id: attendanceListId,
        studentsIds: [userId],
      });

    delete dataToReturn.students;
    return dataToReturn;
  }
}
