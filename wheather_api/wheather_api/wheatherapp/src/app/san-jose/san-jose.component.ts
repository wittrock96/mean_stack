import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { San_joseService } from './san-jose.service';
@Component({
  selector: 'app-San-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class San_joseComponent implements OnInit {
	city: any;
	average: number;
	visibility: number;
  constructor(
  	private _httpService: HttpService,
  	private _San_joseService: San_joseService) { }

  ngOnInit() {
  	console.log('San_jose oninit')
  	this.San_joseWeather()

  }
  San_joseWeather(){
  	console.log('San_joseWeather')
  	let observable = this._San_joseService.San_jose();
  	observable.subscribe((data:any) =>{
  		const info = data.json()
  		console.log('wtf', info)
  		this.city= info;
  		this.average = Math.floor(((this.city.main.temp_min)+(this.city.main.temp_max))/2)
  		
  	});
  }

}
