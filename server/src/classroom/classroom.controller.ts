import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsTeacherAuthorization } from 'src/auth/decorators/is-teacher.decorator';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Controller('classroom')
@ApiTags('Turmas')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Post()
  async create(@Body() createClassroomDto: CreateClassroomDto) {
    try {
      return await this.classroomService.create(createClassroomDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get()
  async findAll() {
    try {
      return await this.classroomService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.classroomService.findOne(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Patch()
  async update(@Body() updateClassroomDto: UpdateClassroomDto) {
    try {
      return await this.classroomService.update(updateClassroomDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.classroomService.remove(id);
    } catch (err) {
      HandleException(err);
    }
  }
}
