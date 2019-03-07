import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';


import { HttpService } from './http.service';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { FactoryComponent } from './factory/factory.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ShowroomComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
