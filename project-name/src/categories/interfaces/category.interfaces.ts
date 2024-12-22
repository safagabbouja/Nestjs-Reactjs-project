import { Document } from "mongoose";
export interface IUcategory extends Document{
    readonly fullname:string;
}
