import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { projectschema } from './entities/project.entity';
import { categorieSchema } from 'src/categories/entities/category.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"projects",schema:projectschema}]),
MongooseModule.forFeature([{name:'categories',schema:categorieSchema}])], //hatina categorie wahda f woust project
  
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
