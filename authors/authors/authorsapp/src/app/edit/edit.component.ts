import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router, Params }    from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	editAuthor: any;
	response: any;
	currentAuthor: any;
	author_name: any;
	author_id: any;
	data: any
  constructor(
  	private _HttpService: HttpService,
  	private _Route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {  		
  		console.log('intializing edit')
  		this.currentAuthor = {}
  	
  		this.oneAuthor()
	}

	updateAuthor(event){
		event.preventDefault()
		this.currentAuthor = {name:''}
		console.log('inside update author of EditComponent')
		let observable = this._HttpService.update(this.author_id, this.currentAuthor)
		observable.subscribe(data =>{
			this.response = data.json()
			
		})
	}
	oneAuthor(){
			this._Route.params.subscribe((params: Params)=>{
  			this.author_id = params['id']
  			console.log('data for editing', this.currentAuthor)
  		})
			let observable = this._HttpService.getAuthor(this.author_id)
  		observable.subscribe(data=>{
  			data = data.json()
  			console.log(data)
  			
  			this.author_name = data['author']
  		this.currentAuthor = {name: this.author_name.name}
  		console.log(this.currentAuthor)

  		})
	}

	
}