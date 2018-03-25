import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'
import { BurbankService } from './burbank.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	city: any;
	average: any;
	visibility: number;
  constructor(
  	private _httpService: HttpService,
  	private _BurbankService: BurbankService) { }

  ngOnInit() {
  	console.log('oninit')
  	this.BurbankWeather()

  	
  }
  BurbankWeather(){
  	console.log('BurbankWeather')
  	let observable = this._BurbankService.Burbank();
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


