import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ceva : number = 0;
  ceva2: string = '';

  usernameR : string = '';
  passwordR : string = '';
  nameR : string = '';
  surnameR : string = '';
  emailR : string = '';
  idR : string = '';

  success: boolean = false;

  ngOnInit() {
  }

  onRegister(){
    this.success = true;

    environment.users.push({"username":this.usernameR,"password":this.passwordR,"name":this.nameR,"surname":this.surnameR,
    "email":this.emailR,"id":this.idR,"attendance":[""]});

    this.ceva = environment.users.length;
    this.ceva2 = environment.users[this.ceva-1].username;
  }

}
