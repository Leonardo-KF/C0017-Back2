import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Injectable()
export class ClassroomService {
  async create(createClassroomDto: CreateClassroomDto) {
    return 'This action adds a new classroom';
  }

  async findAll() {
    return `This action returns all classroom`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} classroom`;
  }

  async update(id: number, updateClassroomDto: UpdateClassroomDto) {
    return `This action updates a #${id} classroom`;
  }

  async remove(id: number) {
    return `This action removes a #${id} classroom`;
  }
}
