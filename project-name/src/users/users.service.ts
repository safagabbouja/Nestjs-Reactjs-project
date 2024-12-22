 import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService { //3melneha injectable bech  nejmou nsta3mleha fil controler exple 
  
  constructor(
    @InjectModel('users') private userModel:Model<IUser>//lezm dima ninjectiw model wela schema bil ism eli mimportiwnou fil module 


  ){}

  async createUser(createUserDto: CreateUserDto):Promise<IUser> { //fct traj3li promiise yaani yema rejected wela sucsess 
    const newUser= await new this.userModel(createUserDto)
    
    return newUser.save()
  }

  async findAllUsers():Promise<IUser[]> {
    const userData=await this.userModel.find()
    if(!userData||userData.length==0){
      throw new NotFoundException('users data not found')

    } 
    return userData
  }
  async findByUserName(username:string):Promise<IUser>{
    return this.userModel.findOne({username}).exec()
  }

    
  

  async findOneUser(userId: string):Promise<IUser> {
   // return `This action returns a #${id} user`;
   const existingUser=await this.userModel.findById(userId)
   if(!existingUser){
    throw new NotFoundException('User not found ')

   }
   return existingUser

  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto):Promise<IUser> {
   // return `This action updates a #${id} user`;
   const updateUser=await this.userModel.findByIdAndUpdate(userId,updateUserDto,
    {new:true})
    if(!updateUser){
      throw new NotFoundException('user not found')
    }
    return updateUser

  }

   async removeUser(userId: string):Promise<IUser> {
    const removedUser=await this.userModel.findByIdAndDelete(userId)
    if(!removedUser){
      throw new NotFoundException('User not found')
    }
    return removedUser
    
  }
}
