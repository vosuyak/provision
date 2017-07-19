import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  username:string="";
  password:any;
  error= this.error;
  loginUser(){
    if(this.username == 'admin' && this.password == 'admin'){
      this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
      console.log(`this is the username: ${this.username} this is the password ${this.password}`);
    }else{
      this.error= true;
      console.log(`this is incorrect log in!`);
    } 
  }//loginUSer()
}
