import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
	newReview: any;
	response: any;
	error: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.newReview = {
  		year:'',
  		make: '',
  		model: '',
  		description: ''
  	}
  }
    addReview(event){
  	event.preventDefault()
  	console.log("in showroom component, heading to service")
  	let observable = this._httpService.createReview(this.newReview)
  	observable.subscribe(data =>{
  		data = data.json()
  		this.error = data['error']
  		console.log(this.error)
  		this._router.navigate(['/showroom']);
  	})
  }

}
