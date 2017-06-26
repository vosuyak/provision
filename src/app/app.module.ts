import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninnavComponent } from "./signinnav/signinnav.component";
import { routes } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninnavComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
