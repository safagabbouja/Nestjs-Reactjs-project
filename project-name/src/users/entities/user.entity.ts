import{Prop, Schema, SchemaFactory} from '@nestjs/mongoose'// importer shema mil nest.js
import { HydratedDocument } from 'mongoose';
import { type } from 'os';
import { Admin } from 'src/admin/entities/admin.entity';
import { Salary } from 'src/salaries/entities/salary.entity';
import * as argon2 from 'argon2';
export type UserDocument=HydratedDocument<User>
@Schema({discriminatorKey:'items'})
export class User {
    @Prop({type:String,enum:[Salary.name,Admin.name]})
    items:string
    @Prop({required:true})
    fullname:string;
    @Prop({required:true,unique:true})
    username:string;
    @Prop({required:true,unique:true})
    email:string
    @Prop({required:true})
    password:string
    @Prop({required:true,unique:true})
    phone:number
    @Prop()
    refreshToken:string
}
export const userSchema=SchemaFactory.createForClass(User).pre('save',
async function () {
    this.password=await argon2.hash(this.password)
    
})
