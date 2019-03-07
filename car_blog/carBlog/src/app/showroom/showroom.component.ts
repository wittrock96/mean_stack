import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {
	newReview: any;
	response: any;
	error: any;
	users: any;
  reviews: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
    
    this.displayReviews()
  	this.newReview = {
  		make: '',
  		model: '',
  		description: ''
  	}
  }




  displayReviews(){
    console.log('getting reviews')
    let observable = this._httpService.allReviews()
    observable.subscribe(info =>{
      info = info.json()
      this.reviews = info['reviews']
      console.log(this.reviews)
    })
  }

}
