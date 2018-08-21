import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faLock, faUser, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faMapMarkedAlt = faMapMarkedAlt;
  
  user: User = {
    email: "",
    password:"",
    name:"",
    address:""
  };

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  register(user: User): void{
   this.userService.register(user)
       .subscribe(res => {
         console.log(res);
       })
    ;
  }

}
