import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { SalariesModule } from './salaries/salaries.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config/dist';


@Module({ //koul me nasn3ou haja jdida bech tkoun marbouta fil "app module"
  // 3ibara 3al main ta3na
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017",{dbName:"pfademijuillet"}), UsersModule, 
  CategoriesModule, ProjectsModule, TasksModule, SalariesModule, AdminModule, AuthModule,ConfigModule.forRoot({isGlobal:true})], //bech na3mlou cnx maa BD
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
