import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggerIn;
  public username;

  constructor() { 
    this.isUserLoggerIn = false;
  }
  setUserLoggedIn(){
    return this.isUserLoggerIn = true;
    // this.username = 'admin';
  }
  getUserLoggedIn(){
    console.log('get user logged in is now.....', this.isUserLoggerIn);
    return this.isUserLoggerIn;
  }
}
