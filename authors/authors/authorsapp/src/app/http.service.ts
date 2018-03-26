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

  edit(editAuthor){
  	return this._http.put('/edit/:id', editAuthor)
  }
}
