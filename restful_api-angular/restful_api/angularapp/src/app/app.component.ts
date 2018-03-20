import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 	tasks = [];
 	task;
 	newtask;
 	hidden = true;
 	
  constructor(private _httpService: HttpService){}
  ngOnInit(){
  	this.task = {id:''}

  	this.newtask={title:'', desc:''}
  	// this.getTasksFromService();

  }
  getTasksFromService(){
  	this.hidden = false;
  	let observable = this._httpService.getTasks();
  	observable.subscribe(data => {
  		console.log('got our tasks', data)
  		this.tasks = data['tasks'];
  		console.log(this.tasks)
  		
  	})
  }
  	getTaskFromService(event){
  		event.preventDefault()
  		console.log("inside get task from form");
  		let observable = this._httpService.getTaskById(this.task.id);
  		observable.subscribe(data => {
  			console.log('got the task', data)
  			this.task = data['task']
  			console.log(this.task)
  		})
  	}
  	createTask(event){
  		event.preventDefault()
  		console.log('made it to component')
  		let observable = this._httpService.create(this.newtask)
  		observable.subscribe(data =>{
  			console.log('created', data)
  			this.newtask = data.task
  		})
  	}
}	
