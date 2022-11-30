import { Injectable } from '@nestjs/common';
import { CreateAttendanceListDto } from './dto/create-attendance-list.dto';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';

@Injectable()
export class AttendanceListService {
  create(createAttendanceListDto: CreateAttendanceListDto) {
    return 'This action adds a new attendanceList';
  }

  findAll() {
    return `This action returns all attendanceList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceList`;
  }

  update(id: number, updateAttendanceListDto: UpdateAttendanceListDto) {
    return `This action updates a #${id} attendanceList`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceList`;
  }
}
