import { Injectable } from '@angular/core';
import { User } from './user';
import { Users } from './user.mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class UserService {

  constructor() { }

  register(user: User): void{
    Users.push(user);
    console.log(Users);

  }


}
