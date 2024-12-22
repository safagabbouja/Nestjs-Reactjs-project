import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './entities/task.entity';
import { projectschema } from 'src/projects/entities/project.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"tasks",schema:TaskSchema}]),
  MongooseModule.forFeature([{name:"projects",schema:projectschema}])], 
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
