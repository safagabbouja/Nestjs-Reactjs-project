import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //controleur houwa eli ye5ou les requetes ya3ml traitementles ba3d yraja3 les reponsee 
 
export class AppController {
  constructor(private readonly appService: AppService) {} //sta3melna classe service 
// dima lmethode ta3na tt9asm 3al service wil controleur 
//1) service nkhdmou fih fonction w logique|||| 2) conroller just tnedi 3al fonction eli khdmtha fil service 

  @Get()
  getHello(): string {
    return this.appService.getHello(); //chargina lméthode eli ismha gethello mewjouda sous nom app service eli hiya teb3aClasse service
    


  }
}
 