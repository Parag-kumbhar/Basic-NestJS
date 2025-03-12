import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    try {
      return await this.authService.login(body.username, body.password);
    } catch (error) {
      throw new UnauthorizedException('Invalid username or password');
    }
  }
}
