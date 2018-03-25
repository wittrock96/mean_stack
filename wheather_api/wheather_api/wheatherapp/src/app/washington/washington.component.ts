import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'
import { WashingtonService } from './washington.service';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
	city: any;
	average: any;
	visibility: number;
  constructor(
  	private _httpService: HttpService,
  	private _WashingtonService: WashingtonService) { }

  ngOnInit() {
  	console.log('oninit')
  	this.WashingtonWeather()

  	
  }
  WashingtonWeather(){
  	console.log('WashingtonWeather')
  	let observable = this._WashingtonService.Washington();
  	observable.subscribe((data:any) =>{
  		const info = data.json()
  		console.log('wtf', info)
  		this.city= info;
  		this.average = Math.floor(((this.city.main.temp_min)+(this.city.main.temp_max))/2)
  		this.visibility = Math.floor((this.city.visibility)/5280)
  	});
  }
  }
  // let observable = this._httpService.delete(destroy_task)
  // 		observable.subscribe(data =>{
  // 			console.log('deleted', data)
  // 		})


