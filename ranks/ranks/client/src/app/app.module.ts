import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';

import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';

import { HttpService } from './http.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    DetailsComponent,
    QuoteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
