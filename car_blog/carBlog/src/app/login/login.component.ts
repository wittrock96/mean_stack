import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	newUser: any;
	loginInfo: any;
	response: any;
	error: any;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router
  	) { }

	ngOnInit() {
		this.loginInfo = {
			email: '',
			password: ''
		}
		this.newUser = {
		first_name:'',
		last_name:'',
		email:'',
		username:'',
		password:''
	}
  }

	createUser(event){
		event.preventDefault()
		console.log("creating user")
		let observable = this._httpService.create(this.newUser)
		observable.subscribe(data =>{
			data = data.json()
			this.error = data['error']
			console.log(this.error)
			this._router.navigate(['']);
		})
	}

	loginUser(event){
		event.preventDefault()
		console.log('logging in')
		let observable = this._httpService.signIn(this.loginInfo)
		observable.subscribe(data =>{
			data = data.json()
			this.error = data['error']
			console.log(this.error)
			this._router.navigate(['']);
		})
	}

}
