import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './account/logout/logout.component';
import { LoginComponent } from "./account/login/login.component";
import { SiteComponent } from "./site/site.component";
import { CreateComponent } from "./site/create/create.component";
import { TvComponent } from "app/tv/tv.component";

export const router: Routes = [
    {
        path:       "",
        component:  HomeComponent
    },
    {
        path:       "error",
        component:  ErrorComponent
    },
    {
        path:       "account/login", 
        component:  AccountComponent
    },
    {
        path:       "account/register", 
        component:  AccountComponent
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
        path:       "site/create",
        component:  CreateComponent
    },
    {
        path:       "tv",
        component:  TvComponent
    },
    {
        path:       ":siteId",
        component:  SiteComponent
    },
    {
        path:       ":siteId/:pageId",
        component:  SiteComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);