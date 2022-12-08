import { Module } from '@nestjs/common';
import { AttendanceListModule } from './attendance-list/attendance-list.module';
import { AuthModule } from './auth/auth.module';
import { ClassroomModule } from './classroom/classroom.module';
import { DatabaseModule } from './prisma/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    ClassroomModule,
    AttendanceListModule,
  ],
})
export class AppModule {}
