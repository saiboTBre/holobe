import { Injectable } from '@nestjs/common';
import { UserService } from '../../domain/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/domain/user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    const checkPassword = await bcrypt.compare(password, user.password);
    if (user && checkPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginUserDto) {
    const validUser = await this.validateUser(user.email, user.password);
    console.log(validUser);
    const payload = { username: validUser.email, sub: validUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
