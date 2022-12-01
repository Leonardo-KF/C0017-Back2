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
import { AttendanceListService } from './attendance-list.service';
import { CreateAttendanceListDto } from './dto/create-attendance-list.dto';
import { RegisterOnAttendanceListDto } from './dto/register-on-attendance-list.dto';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';

@Controller('attendance-list')
export class AttendanceListController {
  constructor(private readonly attendanceListService: AttendanceListService) {}

  @Post()
  create(@Body() createAttendanceListDto: CreateAttendanceListDto) {
    return this.attendanceListService.create(createAttendanceListDto);
  }

  @Post('registerInAttendanceList')
  async registerInAttendanceList(
    @Body() { attendanceListId, userId }: RegisterOnAttendanceListDto,
  ) {
    try {
      return await this.attendanceListService.RegisterOnAttendanceList(
        attendanceListId,
        userId,
      );
    } catch (error) {
      HandleException(error);
    }
  }

  @Get()
  findAll() {
    return this.attendanceListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceListService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttendanceListDto: UpdateAttendanceListDto,
  ) {
    return this.attendanceListService.update(+id, updateAttendanceListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceListService.remove(+id);
  }
}
