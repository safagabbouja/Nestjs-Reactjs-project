import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto,@Res() response) {
    try{
      const newUser=await this.tasksService.createTask(createTaskDto)
      return response.status(HttpStatus.CREATED).json({
        message:'task  created succssfully',
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
  async findAll(@Res() response) {

    
    try{
      const usersData=await this.tasksService.findAllTask()
      return response.status(HttpStatus.OK).json({
        message:'task found succsufully',
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
  
    async findOne(@Param('id') taskId: string,@Res() response) {
      //return this.usersService.findOne(+id);
      try{
        const existingUser=await this.tasksService.findOneTask(taskId)
        return response.status(HttpStatus.OK).json({
          message:"task found by id",
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
  
  

  @Patch(':id')
  async update(@Param('id') taskId: string, @Body() updateTaskDto: UpdateTaskDto,@Res() response) {
  
    try{
      const updatedUser=await this.tasksService.updatetask(taskId,updateTaskDto)
      return response.status(HttpStatus.OK).json({
        message:'task updated successefully',
        status:HttpStatus.OK,
        data:updateTaskDto
        
      })
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      
      })
    }}

  @Delete(':id')
  async remove(@Param('id') taskId: string,@Res() response) {

    try{
      const removedtask=await this.tasksService.removetask(taskId)
      return response.status(HttpStatus.OK).json({
        message:'tasks deleted succefully',
        status:HttpStatus.OK,
        data:removedtask
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
  

