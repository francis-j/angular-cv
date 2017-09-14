import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './header/header.component';
import { HorizontalListComponent } from './generic/horizontal-list/horizontal-list.component';
import { NavigatorComponent } from './header/navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './account/logout/logout.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountComponent } from './account/account.component';
import { VerticalListComponent } from './generic/vertical-list/vertical-list.component';
import { PopularComponent } from './home/popular/popular.component';
import { LatestComponent } from './home/latest/latest.component';
import { ManageComponent } from './account/manage/manage.component';
import { SiteComponent } from './site/site.component';
import { CreateComponent } from './site/create/create.component';
import { SiteHeaderComponent } from './site/site-header/site-header.component';
import { PageListComponent } from './site/page/page-list/page-list.component';
import { AddPageComponent } from './site/create/add-page/add-page.component';

import { HttpHelper } from "app/app.api";
import { CommonService } from "app/common.service";
import { SiteService } from "app/services/site.service";
import { PageComponent } from './site/page/page.component';
import { MySitesComponent } from './home/my-sites/my-sites.component';
import { TvComponent } from './tv/tv.component';
import { UnlockSiteComponent } from './site/unlock-site/unlock-site.component';
import { ConfirmationModalComponent } from './generic/confirmation-modal/confirmation-modal.component';
import { NotificationModalComponent } from './generic/notification-modal/notification-modal.component';
import { ManageSitesComponent } from './account/manage/manage-sites/manage-sites.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HorizontalListComponent,
        NavigatorComponent,
        FooterComponent,
        LoginComponent,
        HomeComponent,
        ErrorComponent,
        LogoutComponent,
        RegisterComponent,
        AccountComponent,
        VerticalListComponent,
        PopularComponent,
        LatestComponent,
        ManageComponent,
        SiteComponent,
        CreateComponent,
        SiteHeaderComponent,
        PageListComponent,
        AddPageComponent,
        PageComponent,
        MySitesComponent,
        TvComponent,
        UnlockSiteComponent,
        ConfirmationModalComponent,
        NotificationModalComponent,
        ManageSitesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routes,
        NgbModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [HttpHelper, CommonService, SiteService],
    bootstrap: [AppComponent],
    entryComponents: [AddPageComponent, UnlockSiteComponent, ConfirmationModalComponent, NotificationModalComponent]
})
export class AppModule { }
