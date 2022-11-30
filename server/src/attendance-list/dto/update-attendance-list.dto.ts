import { PartialType } from '@nestjs/swagger';
import { CreateAttendanceListDto } from './create-attendance-list.dto';

export class UpdateAttendanceListDto extends PartialType(
  CreateAttendanceListDto,
) {}
