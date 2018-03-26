import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

import { AppComponent } from './app.component';

import { EditComponent } from './edit/edit.component';
import { HttpService } from './http.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  	HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
