import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CircleModule } from './domain/circle/circle.module';
import { MeetingModule } from './domain/meeting/meeting.module';
import { MeetingplanModule } from './domain/meetingplan/meetingplan.module';
import { TensionModule } from './domain/tension/tension.module';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './common/auth/auth.module';
import { AuthService } from './common/auth/auth.service';
import { UserService } from './domain/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CircleModule,
    MeetingModule,
    MeetingplanModule,
    TensionModule,
    UserModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
