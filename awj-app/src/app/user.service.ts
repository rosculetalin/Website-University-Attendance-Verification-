import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public userCurrent;

  constructor() { };

  setUser(info){
    this.userCurrent = info;
  }

  getUser(){
    return this.userCurrent;
  }

  

}
