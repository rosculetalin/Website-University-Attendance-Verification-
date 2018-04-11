import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  userCurrent;

  labs : string[] = [];
  cours : string[] = [];

  count : string[] = [];

  constructor(private Service: UserService) {

    this.userCurrent = this.Service.getUser();
    var i;
    var j;
    var aux;
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var dayTrue;
    var idTrue;
    var index = 0;

    for (i = 0; i < environment.laboratories.length; i++){
      
      dayTrue = false;
      idTrue = false;

      for(j = 0; j < environment.laboratories[i].dates.length; j++){
        if (n == environment.laboratories[i].dates[j].day){
          dayTrue = true;
          console.log("day corect");
        }
      }

      for (j = 0; j < environment.laboratories[i].groups.length; j++){
        if (environment.laboratories[i].groups[j] == this.userCurrent.id){
          idTrue = true;
          console.log("id corect");
        }
      }
      
      if ((dayTrue == true) && (idTrue == true)){
        this.labs[index] = environment.laboratories[i].name;
        index++;
      }
      
    }

    index = 0;

    for (i = 0; i < environment.courses.length; i++){
      
      dayTrue = false;
      idTrue = false;

      for(j = 0; j < environment.courses[i].dates.length; j++){
        if (n == environment.courses[i].dates[j].day){
          dayTrue = true;
          console.log("day corect");
        }
      }

      for (j = 0; j < environment.courses[i].groups.length; j++){
        if (environment.courses[i].groups[j] == this.userCurrent.id){
          idTrue = true;
          console.log("id corect");
        }
      }
      
      if ((dayTrue == true) && (idTrue == true)){
        //this.labAndCours.lab[index] = environment.laboratories[i];
        this.cours[index] = environment.courses[i].name;
        index++;
      }
      
    }

    if (this.labs.length > this.cours.length){
      aux = this.labs.length;
    }else{
      aux = this.cours.length;
    }

    for(i = 0 ; i < aux ; i++){
      this.count[i] = i.toString(); 
    }

   }

  ngOnInit() {

  }


  onClickLab(data){
    if (data != undefined){
      var i;
      var j;
      var aux1;
      var aux2;
      console.log(data);
      for(i = 0; i < environment.laboratories.length; i++){
          aux1 = 0;
          if (environment.laboratories[i].name == data){
              aux1 = 1;
              aux2 = 0;
              for(j = 0; j < this.userCurrent.attendance.length; j++){
                  if(environment.laboratories[i].id == this.userCurrent.attendance[j])
                  aux2 = 1;
              }
          }
          if ((aux1 == 1)&& (aux2 == 0) ){
            this.userCurrent.attendance[this.userCurrent.attendance.length] = environment.laboratories[i].id;
            console.log(environment.laboratories[i].id);
          }
      }
    }
  }

  onClickCourse(data){
    if (data != undefined){
      var i;
      var j;
      var aux1;
      var aux2;
      console.log(data);
      for(i = 0; i < environment.courses.length; i++){
          aux1 = 0;
          if (environment.courses[i].name == data){
              aux1 = 1;
              aux2 = 0;
              for(j = 0; j < this.userCurrent.attendance.length; j++){
                  if(environment.courses[i].id == this.userCurrent.attendance[j])
                  aux2 = 1;
              }
          }
          if ((aux1 == 1)&& (aux2 == 0) ){
            this.userCurrent.attendance[this.userCurrent.attendance.length] = environment.courses[i].id;
            console.log(environment.courses[i].id);
          }
      }
    }
  }

}


