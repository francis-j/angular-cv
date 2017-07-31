import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { HeaderComponent } from './header/header.component';
import { HorizontalListComponent } from './generic/horizontal-list/horizontal-list.component';
import { NavigatorComponent } from './header/navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { FormComponent } from './generic/form/form.component';
import { FormComponentComponent } from './generic/form-component/form-component.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './account/logout/logout.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountComponent } from './account/account.component';

import { HttpHelper } from "app/app.api";
import { CommonService } from "app/common.service";
import { VerticalListComponent } from './generic/vertical-list/vertical-list.component';
import { PopularComponent } from './home/popular/popular.component';
import { LatestComponent } from './home/latest/latest.component';
import { ManageComponent } from './account/manage/manage.component';
import { SiteComponent } from './site/site.component';
import { CreateComponent } from './site/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalListComponent,
    NavigatorComponent,
    FooterComponent,
    LoginComponent,
    FormComponent,
    FormComponentComponent,
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
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [HttpHelper, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
