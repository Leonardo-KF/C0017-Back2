import { Module } from '@nestjs/common';
import { AttendanceListService } from './attendance-list.service';
import { AttendanceListController } from './attendance-list.controller';
import { ClassroomService } from 'src/classroom/classroom.service';
import { AttendanceListRespository } from './attendance-list.repository';
import { DatabaseModule } from 'src/prisma/database.module';
import { ClassroomRepository } from 'src/classroom/classrom.repository';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AttendanceListController],
  providers: [
    AttendanceListService,
    AttendanceListRespository,
    ClassroomService,
    ClassroomRepository,
    UserRepository,
  ],
})
export class AttendanceListModule {}
