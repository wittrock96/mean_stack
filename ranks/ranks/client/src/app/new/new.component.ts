import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	newAuthor: any;
	response: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.newAuthor = {name: ''}
  }
  createAuthor(event){
  	event.preventDefault()
  	console.log('creating author')

  	let observable = this._httpService.newAuth(this.newAuthor)
  	observable.subscribe(data =>{
  		this.response = data.json()
  		this._router.navigate(['']);
  		
  	})
  }

}
