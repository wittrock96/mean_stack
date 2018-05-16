import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	newQuote: any;
	author: any;
	error: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.newQuote = {content: '', vote: 0}
  	this.getAuthor()
  	this.error = ''
  }

  getAuthor(){
  	this._route.params.subscribe((params)=>{
  		let observable = this._httpService.oneAuthor(params['id'])
  		observable.subscribe(data =>{
  			data = data.json()
  			this.author = data['author']
  			console.log(this.author)
  		})
  	})
  }
  createQuote(event){
  	console.log('creating quote')
  	let observable = this._httpService.addQuote(this.newQuote, this.author._id)
  	observable.subscribe(
  		(res)=>{
  			res = res.json()
  			console.log(res)
  			this._router.navigate(['/quote', this.author._id]);
  		},
  		(err)=>{
  			this.error = err.json().error.message
  			console.log(this.error)
  		}
  	)
  }

}
