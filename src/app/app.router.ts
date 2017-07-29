import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from "app/login/login.component";

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
        path:       "account", 
        component:  AccountComponent
    },
    {
        path:       "logout",
        component:  LogoutComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);