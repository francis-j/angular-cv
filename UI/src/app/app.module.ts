import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { HeaderComponent } from './header/header.component';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormComponent } from './form/form.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalListComponent,
    NavigatorComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    FormComponent,
    FormComponentComponent,
    HomeComponent,
    ErrorComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
