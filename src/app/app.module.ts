// ag-
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
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
import { UserService } from "./user.service";
import { AuthguardGuard } from "./authguard.guard";
import { AlloffersComponent } from './alloffers/alloffers.component';
import { HomeComponent } from './home/home.component';
import { routes } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninnavComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    AlloffersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [UserService,AuthguardGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
