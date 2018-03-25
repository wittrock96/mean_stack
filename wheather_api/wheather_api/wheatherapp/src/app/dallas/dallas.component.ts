import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'
import { DallasService } from './dallas.service';
@Component({
  selector: 'app-Dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	city: any;
	average: any;
	visibility: number;
  constructor(
  	private _httpService: HttpService,
  	private _DallasService: DallasService) { }

  ngOnInit() {
  	console.log('oninit')
  	this.DallasWeather()

  	
  }
  DallasWeather(){
  	console.log('DallasWeather')
  	let observable = this._DallasService.Dallas();
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


