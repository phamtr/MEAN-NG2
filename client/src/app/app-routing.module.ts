import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
   
   { path: 'profile', component: ProfileComponent },
    { path: '**', component: HomeComponent }
    
  ];

@NgModule({
    declarations: [
    
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
          ),
          CommonModule
    ],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }