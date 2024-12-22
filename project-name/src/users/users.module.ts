import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Mongoose } from 'mongoose';
import { userSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Salary, salarySchema } from 'src/salaries/entities/salary.entity';
import { Admin, adminschema } from 'src/admin/entities/admin.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"users",schema:userSchema ,
discriminators:[
  {name:Salary.name , schema:salarySchema} ,
  {name:Admin.name , schema:adminschema}
]}])], 
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
