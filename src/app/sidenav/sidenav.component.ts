import { Component, OnInit, NgZone } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor( private zone:NgZone) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.zone.runOutsideAngular (() =>{
      $(".button-collapse").sideNav();
    })
  }

}
