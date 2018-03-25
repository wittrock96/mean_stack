import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { DenverService } from './denver.service';
@Component({
  selector: 'app-denver',
  templateUrl: './denver.component.html',
  styleUrls: ['./denver.component.css']
})
export class DenverComponent implements OnInit {
	city: any;
	average: any;
	visibility: number;
  constructor(
  	private _httpService: HttpService,
  	private _DenverService: DenverService) { }

  ngOnInit() {
  	console.log('oninit')
  	this.DenverWeather()

  	
  }
  DenverWeather(){
  	console.log('DenverWeather')
  	let observable = this._DenverService.denver();
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


