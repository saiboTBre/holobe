import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './common/auth/auth.service';
import { LocalAuthGuard } from './common/auth/guards/local-auth.guard';
import { LoginUserDto } from './domain/user/dto/login-user.dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login User' })
  @Post('auth/login')
  async login(@Request() req: any, @Body() loginUser: LoginUserDto) {
    console.log(req);
    console.log(loginUser);
    return this.authService.login(req.user);
  }
}
