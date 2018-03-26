import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	authors = []
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.getAuthors();
  }
  getAuthors(){
  	let observable = this._httpService.allAuthors()
  	observable.subscribe(data =>{
  		data = data.json()

  		this.authors = data['authors']
  	})
  }

}
