import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	createAuthor: any;
	response: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.createAuthor = {name: ''}
  }
  newAuthor(event){
  	console.log('inside component')
  	let observable = this._httpService.new(this.createAuthor)
  	observable.subscribe(data =>{
  		this.response = data.json()
  		this.createAuthor = {Name: ''}
  	})
  }

}
