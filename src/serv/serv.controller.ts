import { ProductData } from './../Data/Product_Data/ProductData.service';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UserData } from './../Data/User_Data/UserData.service';
import * as bcrypt from 'bcrypt';


@Controller('serv')
export class ServController {
  constructor(
    private readonly userData: UserData,
    public ProductData: ProductData
  ) {};

  @Get('Get_All_Users')
  GetAllUsers() {
    return this.userData.GetUserData();
  }

  @Get('Get_One_User')
  GetOneUser() {
    return { user: this.userData.GetUserData().Luka_Abaloidze };
  }

  @Get('Get_User_Name')
  GetUserName() {
    return {
      username: this.userData.GetUserData().Luka_Abaloidze.User_Name,
    };
  }

  @Get('Get_User_Email')
  GetUserEmail() {
    return {
      email: this.userData.GetUserData().Luka_Abaloidze.Email,
    };
  }

  @Get('Get_User_RealName')
  GetRealName() {
    return {
      realName: this.userData.GetUserData().Luka_Abaloidze.Real_Name,
    };
  }

  @Get('Get_User_Password')
  async GetUserPassword() {
    const pass = String( this.userData.GetUserData().Luka_Abaloidze.Password,);
    const hashed = await bcrypt.hash(pass, 5);
    return { password: hashed };
  }

  @Get('Get_User_Specific_Order/:OrderIndex')
  GetSpecOrder(@Param('OrderIndex') OrderIndex: string) {
    const orders = this.userData.GetUserData().Luka_Abaloidze.Orders;
    if (OrderIndex === 'latest') { return { productName: orders.latest.Product_Name } }
    return { productName: orders[OrderIndex].Product_Name };
  }

  // Adcanced Features
  // Add Features For Products
  @Get('Get_All_Products')
  GetAllProducts() { 
    return this.ProductData.getProductData() 
  }
  
  @Get('Get_Product_ByName/:ProdutName')
  GetProductByName(@Param() ProductName: any) {
    const Err_NoProduct_Found: string = "No Produt Found By This Product Name";

    if (ProductName in this.ProductData.getProductData()) {
      return this.ProductData.getProductData().ProductName;
    }

    if (!(ProductName in this.ProductData.getProductData())) {
      return Err_NoProduct_Found;
    }
  }

}