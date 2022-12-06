import { Module } from '@nestjs/common';
import { AttendanceListService } from './attendance-list.service';
import { AttendanceListController } from './attendance-list.controller';
import { ClassroomService } from 'src/classroom/classroom.service';
import { AttendanceListRespository } from './attendance-list.repository';
import { DatabaseModule } from 'src/prisma/database.module';
import { ClassroomRepository } from 'src/classroom/classrom.repository';
import { UserService } from 'src/user/services/user.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AttendanceListController],
  providers: [
    AttendanceListService,
    AttendanceListRespository,
    ClassroomService,
    ClassroomRepository,
    UserService,
    UserRepository,
  ],
})
export class AttendanceListModule {}
