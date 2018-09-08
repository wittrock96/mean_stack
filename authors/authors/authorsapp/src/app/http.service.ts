import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  allAuthors(){
  	return this._http.get('/authors')
  }

  new(createAuthor){
  	console.log('inside service')
  	return this._http.post('/authors/new', createAuthor)
  }
  update(id, currentAuthor){
  	console.log('inside of update')
  	return this._http.patch(`/authors/${id}`, currentAuthor)
  }
  getAuthor(id){
  	return this._http.get(`/author/${id}`)
  }
}
