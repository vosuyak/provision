// ag-
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninnavComponent } from "./signinnav/signinnav.component";
import { DataService } from "./data.service";
import { routes } from "./app.routes";
import { AlloffersComponent } from './alloffers/alloffers.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninnavComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    AlloffersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
