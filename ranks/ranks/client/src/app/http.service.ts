import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HttpService {
  constructor(private _http: Http) { }

  allAuthors(){
  	return this._http.get('/authors')
  }

  newAuth(newAuthor){
  	console.log('in service, going to server')
  	return this._http.post('/author/new', newAuthor)
  }
  oneAuthor(id){
  	console.log('inside service, getting one author from server')
  	return this._http.get(`/author/${id}`)
  }
  update(author){
  	console.log('inside service, heading to update method in server', author)
  	return this._http.patch(`/author/update/${author._id}`, author)
  }
  addQuote(quote, author){
  	console.log('in service, going to create quote', author)
  	return this._http.post(`/authors/addquote/${author}`, quote)
  }
  quotes(id){
  	console.log('in service quotes', id)
  	return this._http.get(`/authors/quotes/${id}`)
  }
  voteUp(voting){
  	console.log('voting')
  	console.log(voting)
  	return this._http.patch(`/vote/up/${voting}`, voting)
  }
  voteDown(voting){
  	console.log('voting')
  	console.log(voting)
  	return this._http.patch(`/vote/down/${voting}`, voting)
  }
  destroy(id){
  	
  }
}
