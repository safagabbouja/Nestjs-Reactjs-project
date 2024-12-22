import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullname:string;
    @IsNotEmpty()
    @IsString()
    username:String;
    @IsNotEmpty()
    @IsString()
    email:string
    @IsNotEmpty()
    @IsString()
    password:String
    @IsNotEmpty()
    @IsString()
    phone:number
    @IsNotEmpty()
    @IsString()
    items:string

}
