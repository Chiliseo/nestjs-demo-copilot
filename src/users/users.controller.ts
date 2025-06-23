import {
  Controller,
  Get,
  HttpException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UsersService } from './users.service';
import { Request as ExpressRequest } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Request() req: ExpressRequest) {
    const userId = req.user['sub'];
    if (!userId) {
      throw new HttpException('User not found', 404);
    }
    const user = await this.usersService.findOne(userId);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const { password: _password, ...result } = user;

    return result;
  }
}
