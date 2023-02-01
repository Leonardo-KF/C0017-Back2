import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { ClassroomRepository } from './classrom.repository';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import {
  AddStudentClassroomDto,
  AddTeacherClassroomDto,
  UpdateClassroomDto,
} from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

interface ClassroomPayload<T> {
  classroom: T;
}

@Injectable()
export class ClassroomService {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const id = randomUUID();
    return await this.classroomRepository.createClassroom(
      createClassroomDto,
      id,
    );
  }

  async findAll(): Promise<
    Omit<Classroom, 'students' | 'teachers' | 'attendances'>[]
  > {
    return await this.classroomRepository.findAllClassrooms();
  }

  async findOne<T = Classroom>(id: string, role: string) {
    return await this.classroomRepository.findClassroomById(id, role);
  }

  async AddStudent(
    updateClassroomDto: AddStudentClassroomDto,
  ): Promise<Omit<Classroom, 'teachers' | 'students' | 'attendances'>> {
    if (!updateClassroomDto.studentId) {
      throw new Exception(
        Exceptions.InvalidData,
        'not send reference to connection',
      );
    }

    return await this.classroomRepository.addStudentInToClassroom(
      updateClassroomDto.studentId,
      updateClassroomDto.id,
    );
  }
  async addTeacher(
    updateClassroomDto: AddTeacherClassroomDto,
  ): Promise<Classroom> {
    if (!updateClassroomDto.teacherId) {
      throw new Exception(
        Exceptions.InvalidData,
        'not send reference to connection',
      );
    }

    return await this.classroomRepository.addTeacherInToClassroom(
      updateClassroomDto.teacherId,
      updateClassroomDto.id,
    );
  }

  async update(updateClassroomDto: UpdateClassroomDto): Promise<Classroom> {
    if (!updateClassroomDto.teachersIds) {
      throw new Exception(
        Exceptions.InvalidData,
        'not send reference to connection',
      );
    }

    return await this.classroomRepository.updateClassroom(updateClassroomDto);
  }

  async remove(id: string): Promise<string> {
    await this.classroomRepository.deleteClassroom(id);
    return 'classroom deleted succesfully';
  }
}
