import { Controller, Get, Post, Body, Patch, Param, Delete,UploadedFile,Res,HttpStatus,UseInterceptors } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { response } from 'express';
//import { HttpStatus } from '@nestjs/common/enums';
//import { Res, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("file",{storage:diskStorage({
      destination:'./upload/projects',
      filename:(_request,file,callback)=>
      callback(null , `${new Date().getTime()}-${file.originalname}`)
})}))
  async createProject (@Body() createProjectDto: CreateProjectDto,@Res() response,
    @UploadedFile() file:Express.Multer.File){

    
    try{
      createProjectDto.file=file.filename
      const newproject=await this.projectsService.createProject(createProjectDto)
      return response.status(HttpStatus.CREATED).json({
        message:'project created succssfully',
        status:HttpStatus.CREATED,
        data:newproject
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
  async findAllProject(@Res() response) {
    try{
      
      const usersData=await this.projectsService.findAllProject()
      return response.status(HttpStatus.OK).json({
        message:'project foun succsufully',
        status:HttpStatus.OK,
        data:usersData
    })
    
  }catch(error){

    return response.status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
    })
  }
}

  

  @Get(':id')
  async findOneProject(@Param('id') projectId: string,@Res() response) {
    
    try{
      const findOneProject=await this.projectsService.findOneProject(projectId)
      return response.status(HttpStatus.OK).json({
        message:"project found by id",
        status:HttpStatus.OK,
        data:findOneProject

      })
    }catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
   
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor("file",{storage:diskStorage({
      destination:'./upload/projects',
      filename:(_request,file,callback)=>
      callback(null , `${new Date().getTime()}-${file.originalname}`)
})}))

  async updateProject (@Param('id') projectId: string, @Body() updateProjectDto: UpdateProjectDto,@UploadedFile() file:Express.Multer.File,@Res() response) {
    try{
      updateProjectDto.file=file?.filename
    const updatedProject=await this.projectsService.updateProject(projectId,updateProjectDto)
    return response.status(HttpStatus.OK).json({
      message:'project updated succcefully',
      status:HttpStatus.OK,
      data:updatedProject
    })
  
  }catch(error){
    return response.status(HttpStatus.BAD_REQUEST).json({

      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null

    })

  }}

  @Delete(':id')
  async remove(@Param('id') projectId: string,@Res() response) {
    try{
      const removedProject=await this.projectsService.removeProject(projectId)
      return response.status(HttpStatus.OK).json({
        message:'Project deleted succesufully',
        status:HttpStatus.OK,
        data:removedProject
      })

    }catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })

    }

    
  }
}
