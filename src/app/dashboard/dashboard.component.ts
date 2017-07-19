import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from "../user.service";
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private user:UserService, private zone:NgZone) { }
  username = "N/A"
  ngOnInit() {
      // this.username = this.user.username;
      console.log('is user logged in? ', this.user.getUserLoggedIn());
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.zone.runOutsideAngular (() =>{
        $('.modal').modal();
    })
  }
}
