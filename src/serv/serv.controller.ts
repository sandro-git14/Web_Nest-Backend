/* eslint-disable prettier/prettier */
import { Controller, Get  } from '@nestjs/common';
import { UserData } from './../Data/User_Data/UserData.service';
import * as bcrypt from 'bcrypt';

@Controller('serv')
export class ServController {

    constructor(public readonly UserData: UserData) {}
    UserData_Acces = new UserData().GetUserData();


    @Get('Get_All_Users')
    GetAllUsers() { return this.UserData.GetUserData(); }

    @Get('Get_One_User')
    GetOneUser() { return this.UserData_Acces.Luka_Abaloidze; }

    @Get('Get_User_Name')
    GetUserName() { return this.UserData_Acces.Luka_Abaloidze.User_Name }

    @Get('Get_User_Email')
    GetUserEmail() { return this.UserData_Acces.Luka_Abaloidze.Email }

    @Get('Get_User_Password')
    async GetUserPassowrd() {
      const Pass = String(this.UserData_Acces.Luka_Abaloidze.Password);
      const hashedPass = await bcrypt.hash(Pass, 10);
      return hashedPass;
    }
}

