import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class DenverService {

  constructor(private _http: Http) {
  	
   }
   denver(){
   	console.log('inside denver DenverService')
   	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=8c841343c7044969f72b553d29d8e459')


   }


}
