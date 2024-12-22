import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type SalaryDocument=HydratedDocument<Salary>

@Schema()
export class Salary {
    items:string
}
export const salarySchema=SchemaFactory.createForClass(Salary)
