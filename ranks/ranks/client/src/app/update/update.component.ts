import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
	author: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.author = {name: ''}
  	console.log('intializing')
  	this._route.params.subscribe((params: Params)=>{
  		this.getAuthor(params['id'])
  	})
  }
  getAuthor(id){
  	console.log('getting author')
  	let observabele = this._httpService.oneAuthor(id)
  	observabele.subscribe(data=>{
  		data = data.json()
  		console.log('got the author', data)
  		this.author = data['author']
  		console.log(this.author.name)
  	})
  }
  updateAuthor(event){
  	event.preventDefault()
  	let observabele = this._httpService.update(this.author)
  	observabele.subscribe(data =>{
  		data = data.json()
  		console.log('updated the author', data)
  		this.author = data
  		this._router.navigate(['']);

  	})
  }

}
