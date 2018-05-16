import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  signin(){
  	console.log('inside http login')
  	return this._http.get('/login')
  }
}
