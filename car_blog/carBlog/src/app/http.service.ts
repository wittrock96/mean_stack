import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: Http) { }
    loggedIn = false;

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

  	

  	signIn(loginInfo){
      this.loggedIn = true;
  		console.log("in service, heading to server to login")
  		return this._http.post('/signin', loginInfo)
  	}
    allReviews(){
      console.log('in service, getting reviews')
      return this._http.get('/reviews')
    }
    logout(){
      console.log('in service, heading to server to log out session user')
      return this._http.get('/logout')
    }

}
