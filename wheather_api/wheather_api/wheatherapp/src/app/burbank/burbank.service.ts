import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class BurbankService {

  constructor(private _http: Http) {
  	
   }
   Burbank(){
   	console.log('inside Burbank BurbankService')
   	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank&units=metric&appid=8c841343c7044969f72b553d29d8e459')


   }


}
