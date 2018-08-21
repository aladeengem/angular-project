import { Injectable } from '@angular/core';
import { User } from './user';
import { Users } from './user.mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any>{
    console.log(user);
    return this.http.post('/users/register', user, this.httpOptions);

  }


}
