import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const router: Routes = [
    {
        path:       "signup", 
        component:  SignUpComponent
    },
    {
        path:       "login", 
        component:  LoginComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);