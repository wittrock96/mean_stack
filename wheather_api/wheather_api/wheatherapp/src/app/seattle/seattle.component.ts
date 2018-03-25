import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { SeattleService } from './seattle.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	city: any;
	average: number;
	visibility: any;
  constructor(
  	private _httpService: HttpService,
  	private _SeattleService: SeattleService) { }

  ngOnInit() {
  	console.log('seattle oninit')
  	this.SeattleWeather()

  }
  SeattleWeather(){
  	console.log('seattleWeather')
  	let observable = this._SeattleService.seattle();
  	observable.subscribe((data:any) =>{
  		const info = data.json()
  		console.log('wtf', info)
  		this.city= info;
  		this.average = Math.floor(((this.city.main.temp_min)+(this.city.main.temp_max))/2)
  		this.visibility = Math.floor((this.city.visibility)/5280)
  	});
  }

}
