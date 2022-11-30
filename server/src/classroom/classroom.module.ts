import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';

@Module({
  controllers: [ClassroomController],
  providers: [ClassroomService]
})
export class ClassroomModule {}
