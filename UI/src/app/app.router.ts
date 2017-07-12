import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const router: Routes = [
    {
        path:       "home",
        component:  HomeComponent
    },
    {
        path:       "error",
        component:  ErrorComponent
    },
    {
        path:       "signup", 
        component:  SignUpComponent
    },
    {
        path:       "login", 
        component:  LoginComponent
    },
    {
        path:       "logout",
        component:  LogoutComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);