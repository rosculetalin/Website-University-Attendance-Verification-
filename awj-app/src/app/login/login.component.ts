import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameVerify: string = '';
  passwordVerify: string = '';

  success: boolean = false;

  userCurrent;

  constructor(private Service: UserService) { 
  }

  ngOnInit() {
  }

  onSubmit(){
    var i;
    this.success = false;
    for(i = 0; i < environment.users.length; i++){
      if ( (this.usernameVerify ==  environment.users[i].username) && (this.passwordVerify ==  environment.users[i].password) ){
        this.success = true; 
        this.userCurrent = environment.users[i];
        this.Service.setUser(this.userCurrent);
      }
         
    }
  }

}

