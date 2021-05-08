import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PagesComponent } from './pages/pages.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module'
import { HeaderComponent } from './layout/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthenticationRoutingModule,
    AuthenticationModule,
    PagesModule,
    PagesRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
