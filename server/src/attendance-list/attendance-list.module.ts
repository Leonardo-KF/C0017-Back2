import { Module } from '@nestjs/common';
import { AttendanceListService } from './attendance-list.service';
import { AttendanceListController } from './attendance-list.controller';

@Module({
  controllers: [AttendanceListController],
  providers: [AttendanceListService]
})
export class AttendanceListModule {}
