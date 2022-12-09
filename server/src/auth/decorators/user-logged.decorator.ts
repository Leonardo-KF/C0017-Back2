import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUserEntity } from 'src/user/entities/user.entity';

export const userLogged = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IUserEntity => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
