import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
@Schema()

export class Project {
    @Prop({required:true,unique:true})
    name:string;
    @Prop({required:true})
    description:string;
    @Prop({required:true})
    file:string;
    @Prop({required:true,type:SchemaTypes.ObjectId,ref:'categories'})
    category:Types.ObjectId;
    @Prop([{type:SchemaTypes.ObjectId,ref:'tasks'}])
    tasks:Types.ObjectId[]


}
export const projectschema=SchemaFactory.createForClass(Project)
