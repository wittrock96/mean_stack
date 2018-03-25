import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'
import { ChicagoService } from './chicago.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
	city: any;
	average: any;
	visibility: number;
  constructor(
  	private _httpService: HttpService,
  	private _ChicagoService: ChicagoService) { }

  ngOnInit() {
  	console.log('oninit')
  	this.ChicagoWeather()

  	
  }
  ChicagoWeather(){
  	console.log('ChicagoWeather')
  	let observable = this._ChicagoService.Chicago();
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


