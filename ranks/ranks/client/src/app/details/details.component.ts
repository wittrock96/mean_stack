import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	quotes: any;
	author: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.getAuthor()
  }
    getAuthor(){
  		this._route.params.subscribe((params)=>{
  			let observable = this._httpService.oneAuthor(params['id'])
  			observable.subscribe(data =>{
  				data = data.json()
  				this.author = data['author']
  				console.log(this.author)
  				this.getQuotes(this.author._id)
  			})
  		})
  	}
  	getQuotes(id){
  		let observable = this._httpService.quotes(id)
  		observable.subscribe(data=>{
  			data = data.json().quotes.quotes
  			this.quotes = data
  			console.log(this.quotes)
  		})

  	}
  	incVote(id){
  		let observable = this._httpService.voteUp(id)
  		observable.subscribe(data =>{
  			data = data.json()
  			console.log(data)
  			this.getAuthor();
  		})
  	}
  	decVote(id){
  		let observable = this._httpService.voteDown(id)
  		observable.subscribe(data =>{
  			data = data.json()
  			console.log(data)
  			this.getAuthor();
  		})
  	}
  	removeDelete(id){
  		let observable = this._httpService.destroy(id)
  		observable.subscribe(data =>{
  			data = data.json()
  			console.log('delte', data)
  		})
  	}
}
