import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { ClassroomRepository } from './classrom.repository';
import { DatabaseModule } from 'src/prisma/database.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ClassroomController],
  providers: [ClassroomService, ClassroomRepository],
})
export class ClassroomModule {}
