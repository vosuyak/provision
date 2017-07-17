import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninnavComponent } from "./signinnav/signinnav.component";
import { AlloffersComponent} from "./alloffers/alloffers.component";

export const router: Routes = [
    {path:'',redirectTo:'/',pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent},
    {path:'signup', component: SignupComponent},
    {path:'alloffers', component: AlloffersComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);