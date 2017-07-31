import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './account/logout/logout.component';
import { LoginComponent } from "./account/login/login.component";
import { SiteComponent } from "./site/site.component";
import { CreateComponent } from "./site/create/create.component";

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
    },
    {
        path:       ":id",
        component:  SiteComponent
    },
    {
        path:       "site/create",
        component:  CreateComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);