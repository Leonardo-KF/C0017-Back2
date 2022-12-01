import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  private _classroomList: Classroom[] = [];
  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const createdClassroom: Classroom = {
      ...createClassroomDto,
      id: randomUUID(),
      students: [],
      teachers: [],
      attendances: [],
    };
    this._classroomList.push(createdClassroom);
    return createdClassroom;
  }

  async findAll(): Promise<Classroom[]> {
    return this._classroomList;
  }

  async findOne(id: string): Promise<Classroom> {
    return this._classroomList.find((classroom) => classroom.id === id);
  }

  async update(
    id: string,
    updateClassroomDto: UpdateClassroomDto,
  ): Promise<Classroom> {
    this._classroomList.map((classroom, index) => {
      if (classroom.id === id) {
        const updatedClassroom = Object.assign(classroom, updateClassroomDto);
        this._classroomList.splice(index, 1, updatedClassroom);
      }
    });

    return await this.findOne(id);
  }

  async remove(id: string): Promise<string> {
    this._classroomList.map((classroom, index) => {
      if (classroom.id === id) {
        this._classroomList.splice(index, 1);
      }
    });

    return Promise.resolve('Classroom deleted succesfully');
  }
}
