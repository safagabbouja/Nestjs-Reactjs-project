import { Injectable } from "@nestjs/common";
import { ExtractJwt,Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
type JwtPayload={
    sub:string;
    username:string;
}
@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.JWT_ACCESS_SECRET
        })
    }
    validate(payload:JwtPayload){
        return payload
    }
}