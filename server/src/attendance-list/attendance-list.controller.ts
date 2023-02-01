import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsTeacherAuthorization } from 'src/auth/decorators/is-teacher.decorator';
import { userLogged } from 'src/auth/decorators/user-logged.decorator';
import { IUserEntity } from 'src/user/entities/user.entity';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { AttendanceListService } from './attendance-list.service';
import { CreateAttendanceListDto } from './dto/create-attendance-list.dto';
import { RegisterOnAttendanceListDto } from './dto/register-on-attendance-list.dto';
import { UpdateAttendanceListDto } from './dto/update-attendance-list.dto';

@Controller('attendance-list')
@ApiTags('Lista de chamada')
export class AttendanceListController {
  constructor(private readonly attendanceListService: AttendanceListService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('me')
  async me(@userLogged() userLogged: IUserEntity) {
    try {
      return await this.attendanceListService.me(userLogged.id);
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Post()
  create(@Body() createAttendanceListDto: CreateAttendanceListDto) {
    return this.attendanceListService.create(createAttendanceListDto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post('registerInAttendanceList')
  async registerInAttendanceList(
    @userLogged() userLogged: IUserEntity,
    @Body() { attendanceListId }: RegisterOnAttendanceListDto,
  ) {
    try {
      return await this.attendanceListService.RegisterOnAttendanceList(
        attendanceListId,
        userLogged.id,
      );
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get()
  async findAll() {
    try {
      return await this.attendanceListService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.attendanceListService.findOne(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Body() updateAttendanceListDto: UpdateAttendanceListDto) {
    try {
      return await this.attendanceListService.update(updateAttendanceListDto);
    } catch (err) {
      HandleException(err);
    }
  }
}
