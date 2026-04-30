import { Module } from '@nestjs/common';
import { ServController } from './serv.controller';
import { ServService } from './serv.service';
import { UserData } from '../Data/User_Data/UserData.service';
import { ProductData } from '../Data/Product_Data/ProductData.service';

@Module({
  controllers: [ServController],
  providers: [ServService, UserData, ProductData],
})
export class ServModule {}
