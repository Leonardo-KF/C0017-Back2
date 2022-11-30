import { Module } from '@nestjs/common';
import { AttendanceListService } from './attendance-list.service';
import { AttendanceListController } from './attendance-list.controller';
import { ClassroomService } from 'src/classroom/classroom.service';

@Module({
  controllers: [AttendanceListController],
  providers: [AttendanceListService, ClassroomService],
})
export class AttendanceListModule {}
