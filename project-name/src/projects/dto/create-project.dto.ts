import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsNotEmpty()
    @IsString()
    description:string;
    @IsNotEmpty()
    @IsString()
    file:string;
  //static file: string;
  @IsNotEmpty()
  @IsString()
  category:string;

}


