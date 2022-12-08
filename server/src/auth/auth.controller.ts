import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login-input.dto';

@Controller('Authorization')
@ApiTags('Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: UserLoginDto) {
    return await this.authService.validateUser(data);
  }

  @UseGuards(AuthGuard())
  @Get()
  @ApiBearerAuth()
  async getUser(@Request() req) {
    console.log(req);
  }
}
