import { Injectable } from '@nestjs/common';

@Injectable() // classe Appservice est injectable :nejm 
//nsta3mlha f blasa ou5ra hika aaleh sta3melna decorator @Injectable()
export class AppService {
  getHello(): string { // hedhi 3ibara 3ala fonction chtraj3li retour de type string eli hiya helloworld
//RQ: dima nebdew bil 
    return 'Hello World!';
  }
}
