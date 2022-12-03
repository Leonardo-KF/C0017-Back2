import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';
import { AttendanceList } from './entities/attendance-list.entity';

@Injectable()
export class AttendanceListRespository {
  constructor(private readonly prismaService: PrismaService) {}

  async createAttendanceList({
    classroomId,
    day,
    endDate,
    id,
    startDate,
    students,
  }: AttendanceList): Promise<AttendanceList> {
    return await this.prismaService.attendanceList.create({
      data: {
        day: day,
        endDate: endDate,
        id: id,
        startDate: startDate,
        classroomId: classroomId,
      },
      include: {
        students: true,
      },
    });
  }

  async updateAttendanceList({
    id,
    studentsIds,
  }: UpdateAttendanceListDto): Promise<AttendanceList> {
    try {
      return await this.prismaService.attendanceList.update({
        where: { id: id },
        data: {
          students: {
            connect: studentsIds.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          students: true,
        },
      });
    } catch (err) {
      throw new Exception(
        Exceptions.DatabaseException,
        'userId sended not exist',
      );
    }
  }

  async allAttendancesLists(): Promise<AttendanceList[]> {
    return await this.prismaService.attendanceList.findMany({
      include: { students: true },
    });
  }

  async attendanceListById(id: string): Promise<AttendanceList> {
    return await this.prismaService.attendanceList.findUniqueOrThrow({
      where: { id: id },
      include: {
        students: true,
      },
    });
  }
}
