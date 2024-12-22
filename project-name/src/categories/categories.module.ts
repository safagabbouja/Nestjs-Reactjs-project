import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorieSchema } from './entities/category.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"categories",schema:categorieSchema}])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
