import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { NewComponent } from './new/new.component';
import { DenverComponent } from './denver/denver.component';
import { DenverService } from './denver/denver.service'
import { SeattleComponent } from './seattle/seattle.component'
import { SeattleService } from './seattle/seattle.service';
import { San_joseComponent } from './san-jose/san-jose.component'
import { San_joseService } from './san-jose/san-jose.service';
import { BurbankComponent } from './burbank/burbank.component';
import { BurbankService } from './burbank/burbank.service';
import { DallasComponent } from './dallas/dallas.component';
import { DallasService } from './dallas/dallas.service';
import { WashingtonComponent } from './washington/washington.component';
import { WashingtonService } from './washington/washington.service';
import { ChicagoComponent } from './chicago/chicago.component';
import { ChicagoService } from './chicago/chicago.service';
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    DenverComponent,
    SeattleComponent,
    San_joseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  DenverService,
  SeattleService,
  San_joseService,
  BurbankService,
  DallasService,
  WashingtonService,
  ChicagoService,
  HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
