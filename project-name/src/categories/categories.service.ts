import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IUcategory } from './interfaces/category.interfaces';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('categories') private categoryModel:Model<IUcategory>//lezm dima ninjectiw model wela schema bil ism eli mimportiwnou fil module 


  ){}
  async createcategories(createCategoryDto: CreateCategoryDto):Promise<IUcategory> {
    const newcategory=await new this.categoryModel(createCategoryDto);
    return newcategory.save()
  }

  async findAllcategories():Promise<IUcategory[]> {
    const categoraffiche=await this.categoryModel.find();
    if(!categoraffiche||categoraffiche.length==0){
      throw new NotFoundException('categorie data not found')

    }
    return categoraffiche
  }

  async findOnecategory(categoryId: string):Promise<IUcategory> {
   const existingcategory=await this.categoryModel.findById(categoryId) 
   if(!existingcategory){
    throw new  NotFoundException('category not found')

   }
   return existingcategory
  }
  
  async updatecategory(categoryId: string, updateCategoryDto: UpdateCategoryDto):Promise<IUcategory> {

    const updatecategory=await this.categoryModel.findByIdAndUpdate(categoryId,updateCategoryDto,
    {new:true})
    if(!updatecategory){
      throw new NotFoundException('catogory not found')
    }
    return updatecategory
  }

  async removeCategory(categoryId: string):Promise<IUcategory> {
    const removeCategory=await this.categoryModel.findByIdAndDelete(categoryId)
    if(!removeCategory){
      throw new NotFoundException('category not found')

    }
    return removeCategory
  }
}
