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
  	console.log("this is the app component")
  }

  logout(){
    console.log('logging out')
    let observable = this._httpService.logout()
    observable.subscribe(data =>{
      console.log(data)
    })
  }

 
}
