import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

type signInDto = {
  email: string;
  password: string;
};

export type JwtPayload = {
  sub: number; // User ID
  username: string; // User email
};

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(body: signInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(body.email);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const { password: _passwordUser, ...result } = user;

    if (user.password !== body.password) {
      throw new HttpException('credentials not match', 400);
    }

    const payload: JwtPayload = { sub: result.id, username: result.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
