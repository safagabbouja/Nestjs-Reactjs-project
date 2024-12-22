import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class Task {
    @Prop({required:true})
    titre:string;
    @Prop({required:true})
    description:string;
    @Prop({required:true,type:SchemaTypes.ObjectId,ref:'projects'})
    project:Types.ObjectId
    

}
export const TaskSchema=SchemaFactory.createForClass(Task) 
