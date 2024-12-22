//import { Schema } from "mongoose";
import{Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { SchemaTypes, Types } from 'mongoose';
@Schema()


export class Category {
    @Prop({required:true})
    name:string;
    @Prop([{type:SchemaTypes.ObjectId,ref:'projects'}])
    projects:Types.ObjectId[]


}
export const categorieSchema=SchemaFactory.createForClass(Category) //3melna export b ism schema ta3na 
