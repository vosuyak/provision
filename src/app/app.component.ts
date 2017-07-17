import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataService:DataService){


  }
  someProperty:string = '';
  ngOnOnIt(){
    console.log('hello');
    
    console.log(this.dataService.users);
    this.someProperty = this.dataService.myData();
  }
  title = 'app';
}
