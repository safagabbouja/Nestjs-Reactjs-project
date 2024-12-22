import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
 async create(@Body() createUserDto: CreateUserDto,@Res()response) { // lBOdy feha l'objet CreateUserDto eli sna3neh bech ytb3ath fil body ta3 body taa requete   
    //return this.usersService.create(createUserDto);
    try{
      const newUser=await this.usersService.createUser(createUserDto)
      return response.status(HttpStatus.CREATED).json({
        message:'User created succssfully',
        status:HttpStatus.CREATED,
        data:newUser
      })
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })

    }
  
  }

  @Get()
  async findAllUsers(@Res() response) {
    try{
      const usersData=await this.usersService.findAllUsers()
      return response.status(HttpStatus.OK).json({
        message:'users foun succsufully',
        status:HttpStatus.OK,
        data:usersData
      })

    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
    //return this.usersService.findAllUsers():Promise<IUser[]>;
  }

  @Get(':id')
  async findOne(@Param('id') userId: string,@Res() response) {
    //return this.usersService.findOne(+id);
    try{
      const existingUser=await this.usersService.findOneUser(userId)
      return response.status(HttpStatus.OK).json({
        message:"User found by id",
        status:HttpStatus.OK,
        data:existingUser

      })
    }
  catch(error){
    return response.status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
    })
  }}

  @Put(':id')
  async update(@Param('id') userId: string, @Res() response, @Body() updateUserDto: UpdateUserDto) {
    try{
      const updateUser=await this.usersService.updateUser(userId,updateUserDto)
      return response.status(HttpStatus.OK).json({
        message:'user updated successefully',
        status:HttpStatus.OK,
        data:updateUser
        
      })
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      
      })

    }

    //return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') userId: string,@Res() response) {

    try{
      const removedUser=await this.usersService.removeUser(userId)
      return response.status(HttpStatus.OK).json({
        message:'User deleted succefully',
        status:HttpStatus.OK,
        data:removedUser
      })
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }
}
