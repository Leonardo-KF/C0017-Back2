import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/entities/user.entity';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { AuthService } from './auth.service';
import { IsTeacherAuthorization } from './decorators/is-teacher.decorator';
import { userLogged } from './decorators/user-logged.decorator';
import { UserLoginDto } from './dto/user-login-input.dto';

@Controller('Authorization')
@ApiTags('Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: UserLoginDto) {
    try {
      return await this.authService.validateUser(data);
    } catch (error) {
      HandleException(error);
    }
  }

  @Get()
  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  async getUser(@userLogged() user: IUserEntity) {
    return user;
  }
}
