import { Document } from "mongoose";
export interface IUser extends Document{
    readonly fullname:string;
    readonly username:string;
    readonly email:string;
    readonly password:string;
    readonly phone:number
    readonly  refreshToken:string
}
