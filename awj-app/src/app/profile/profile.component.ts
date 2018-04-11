import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  count : string[] = [];

  userCurrent;

  
  constructor(private Service: UserService) {
    this.userCurrent = this.Service.getUser();
    var i;
    var aux;
    aux = this.userCurrent.attendance.length;
  
    this.userCurrent = this.Service.getUser();
    for(i = 0 ; i < aux ; i++){
      this.count[i] = i.toString(); 
    }


  }

  ngOnInit() {
  }

}
