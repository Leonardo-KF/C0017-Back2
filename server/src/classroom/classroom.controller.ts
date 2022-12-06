import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  async create(@Body() createClassroomDto: CreateClassroomDto) {
    try {
      return this.classroomService.create(createClassroomDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @Get()
  findAll() {
    try {
      return this.classroomService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.classroomService.findOne(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @Patch()
  async update(@Body() updateClassroomDto: UpdateClassroomDto) {
    try {
      return this.classroomService.update(updateClassroomDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.classroomService.remove(id);
    } catch (err) {
      HandleException(err);
    }
  }
}
