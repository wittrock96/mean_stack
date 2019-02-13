import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: Http) { }


  	create(newUser){
  		console.log('in service, heading to server')
  		console.log(newUser)
  		return this._http.post('/registration', newUser)
  	}

  	createReview(newReview){
  		console.log("in service, heading to server")
  		console.log(newReview)
  		return this._http.post('/review/new', newReview)
  	}

}
