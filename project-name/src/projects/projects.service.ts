import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUcategory } from 'src/categories/interfaces/category.interfaces';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { IProject } from './interfaces/projects.interfaces';


@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('projects') private projectsModel:Model<IProject>,//lezm dima ninjectiw model wela schema bil ism eli mimportiwnou fil module 
    @InjectModel('categories') private categoryModel:Model<IUcategory>

  ){}
  

 async createProject(createProjectDto: CreateProjectDto):Promise <IProject> {
  const newproject=await new this.projectsModel(createProjectDto);
  await this.categoryModel.updateOne({_id:createProjectDto.category},
  {$push:{projects:newproject._id}})
  return newproject.save()
  
  }

  async findAllProject():Promise <IProject[]> {
    const findallproject=await this.projectsModel.find()
    if(!findallproject||findallproject.length==0){
      throw new NotFoundException('project data not found')

    } 
    return findallproject
  }
  

  async findOneProject(projectId: string):Promise<IProject> {
    const existProject=await  this.projectsModel.findById(projectId)
    if(!existProject){
      throw new NotFoundException('projects not found')
    }
    return existProject
    
  }

  async updateProject(projectId: string, updateProjectDto: UpdateProjectDto) {
    const updateProject=await this.projectsModel.findByIdAndUpdate(projectId,updateProjectDto)
  }

  async removeProject(projectId: string) {
    const removedProject=await this.projectsModel.findByIdAndDelete(projectId)
    await this.categoryModel.updateOne({_id:removedProject.category},{$pull:{projects:removedProject._id}})
    if(!removedProject){
      throw new NotFoundException('projectnotfound')
    }
    return(removedProject)
  }
}
