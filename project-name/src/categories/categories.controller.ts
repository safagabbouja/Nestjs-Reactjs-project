import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { response } from 'express';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto,@Res()response) {
    try{
      const newcat=await this.categoriesService.createcategories(createCategoryDto)
      return response.status(HttpStatus.CREATED).json({
        message:'category created succssfully',
        status:HttpStatus.CREATED,
        data:newcat
      })
  } catch(error){
    return response.status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
      
    })
  }}
 
    

  @Get()
  async findAllcategories(@Res()response) {
    try{
      const findcategory=await this.categoriesService.findAllcategories()
      return response.status(HttpStatus.OK).json({
        message:'categorie found succsufully',
        status:HttpStatus.OK,
        data:findcategory
      })

    }catch(error){
      return response.Status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null

    })
    
    }}
  @Get(':id')
  async findOne(@Param('id') categoryId: string,@Res() response) {
    try{
      const existingcategory=await this.categoriesService.findOnecategory(categoryId)
      return response.status(HttpStatus.OK).json({
        message:'category found by id ',
        status:HttpStatus.OK,
        data:existingcategory
      })

    }catch(error){
      return response.Status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    
    }
   
  }

  @Patch(':id')
  async update(@Param('id') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto,@Res() response) {
    try{
      const updatecategories=await this.categoriesService.updatecategory(categoryId,updateCategoryDto)
      return response.status(HttpStatus.OK).json({
        message:'patch is done ',
        status:HttpStatus.OK,
        data:updatecategories

      })
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
 
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') categoryId: string,@Res() response) {
    try{
      const deletegategory=await this.categoriesService.removeCategory(categoryId)
      return response.status(HttpStatus.OK).json({
      message:'deletecategory done succsefully',
      status:HttpStatus.OK,
      data:deletegategory
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
