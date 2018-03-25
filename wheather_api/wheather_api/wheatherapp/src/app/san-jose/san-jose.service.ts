import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class San_joseService {

  constructor(private _http: Http) { 

  }

	  San_jose(){
	   	console.log('inside San-joseService')
	   	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=san%20jose&units=metric&appid=8c841343c7044969f72b553d29d8e459')


	}
}
