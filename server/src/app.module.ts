import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AttendanceListModule } from './attendance-list/attendance-list.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthStrategy } from './auth/auth.strategy';
import { ClassroomModule } from './classroom/classroom.module';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
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
