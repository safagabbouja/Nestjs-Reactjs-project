import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { get } from 'http';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { AuthService } from './auth.service';
import { CreateLoginDto } from './dto/create.login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  signIn(@Body() data:CreateLoginDto){
    return this.authService.signIn(data)
  }
  @UseGuards(AccessTokenGuard)
  @Get('logout')
logout (@Req() req:Request){
 return  this.authService.logout(req.user['sub'])
}
}

