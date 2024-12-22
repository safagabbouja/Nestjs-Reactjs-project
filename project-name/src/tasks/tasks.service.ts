import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProject } from 'src/projects/interfaces/projects.interfaces';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ITask } from './interfaces/tasks.interface';
import { Response } from 'express';
import { Project } from 'src/projects/entities/project.entity';


@Injectable()
export class TasksService {
  constructor(
    @InjectModel('tasks') private tasksModel:Model<ITask>,
    @InjectModel('projects') private projectsModel:Model<IProject>
  


  ){}
  async createTask(createTaskDto: CreateTaskDto):Promise <ITask> {
    const newTask=await new this.tasksModel(createTaskDto);
    await this.projectsModel.updateOne({_id:createTaskDto.project} ,
       {$push:{tasks:newTask._id}} ) //bech nasn3ou task jdida feha id ta3 project w ba3d fil project bech nzidoufil tableau 
       //tasks les id mta3 tasks eli sna3nehoum 
    return newTask.save()
  }
    
  

  async findAllTask():Promise <ITask[]> {
    const alltask=await this.tasksModel.find()
    if(!alltask||alltask.length==0){
      throw new NotFoundException('tasks data not found')

    } 
    return alltask
  }
  

  async findOneTask(taskId: string):Promise<ITask> {
    const existingtask=await this.tasksModel.findById(taskId)

   if(!existingtask){
    throw new NotFoundException('task not found ')

   }
   return existingtask

  }

    
  

  async updatetask(taskId: string, updateTaskDto: UpdateTaskDto):Promise<ITask> {
    
    const updateUser=await this.tasksModel.findByIdAndUpdate(taskId,updateTaskDto,
      {new:true})
      if(!updateUser){
        throw new NotFoundException('task not updated')
      }
      return updateUser
  
    }
  

  async removetask(taskId: string):Promise<ITask> {
    const removedtask=await this.tasksModel.findByIdAndDelete(taskId)
    await this.projectsModel.updateOne({_id:removedtask.project},{$pull:{tasks:removedtask._id}})
    if(!removedtask){
      throw new NotFoundException('task not deleted')
    }
    return removedtask
    
  }}

