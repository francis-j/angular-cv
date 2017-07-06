import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { HeaderComponent } from './header/header.component';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalListComponent,
    NavigatorComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
