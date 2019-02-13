import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: any;
  title = "Cole wittrock's portfolio";

  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit(){
  	this.diplayPictures()
  }

  diplayPictures(){
  	console.log("getting images")
  	this.images = ["https://cdn.motor1.com/images/mgl/63QpN/s1/audi-rs4-avant-sonoma-green-in-austria.jpg",
  					"https://aml-prod-cdn.azureedge.net/aml-prod-sitefinity-custom/images/default-source/models/dbs-superleggera/am7_assets_01-edit.jpg?sfvrsn=42bb60f9_0&w=1080&quality=60",
  					"https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/cars-road-test/2016/06/f5ebbe56d2263a1bd41fadd50269f815/lambo.jpg?itok=lEGfFpiO"
  					]
  }
}
