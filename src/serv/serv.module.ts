import { Module } from '@nestjs/common';
import { ServController } from './serv.controller';
import { ServService } from './serv.service';
import { UserData } from '../Data/User_Data/UserData.service';

@Module({
  controllers: [ServController],
  providers: [ServService, UserData],
})
export class ServModule {}
