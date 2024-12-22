import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UsersService } from 'src/users/users.service';
import { CreateLoginDto } from './dto/create.login.dto';
import * as argon2 from 'argon2';
@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private configService:ConfigService,
        private jwtService:JwtService
    ){}
    //generate token
    async getTokens(userId:string,username:string){
    const [accessToken,refreshToken]=await Promise.all([
        this.jwtService.signAsync({
          sub:userId,username  
        },
        {
            secret:this.configService.get<string>('JWT_ACCESS_SECRET'),
            expiresIn:"7d"
        }
        ),
        this.jwtService.signAsync({
            sub:userId,username
        },
        {
            secret:this.configService.get<string>('JWT_REFRESH_SECRET'),
            expiresIn:"15d"
        }
        )

    ])
    return{accessToken,refreshToken}
    
}
async signIn(data:CreateLoginDto){
    const user=await this.usersService.findByUserName(data.username)
    if(!user){
        throw new BadRequestException("user does not exist")
    }
    const passwordMatches=await argon2.verify(user.password,data.password)
    if(!passwordMatches){
        throw new BadRequestException('password incorrect')

    }
    const Tokens=await this.getTokens(user._id,user.username)
    await this.updateRefreshToken(user._id,Tokens.refreshToken)
    return {Tokens,user}

}
async updateRefreshToken(userId:string , refreshToken:string){
    const hashedRefreshToken=await argon2.hash(refreshToken)
    await this.usersService.updateUser(userId , {refreshToken :hashedRefreshToken})
}
async logout(userId:string){
    this.usersService.updateUser(userId,{refreshToken:null})
}
}
