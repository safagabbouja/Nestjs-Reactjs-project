import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt/dist';
import { UsersModule } from 'src/users/users.module';
import { AccessTokenStrategy } from './strategies/acessToken.strategy';

@Module({
  imports:[JwtModule.register({}),UsersModule],
  controllers: [AuthController],
  providers: [AuthService,AccessTokenStrategy]
})
export class AuthModule {}
