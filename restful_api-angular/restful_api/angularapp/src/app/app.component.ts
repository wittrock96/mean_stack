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
 	edittask;
 	current_task = any;
 	hidden = true;
 	show_edit = false;
 	
  constructor(private _httpService: HttpService){}
  ngOnInit(){
  	this.task = {id:''}
  	this.newtask={title:'', desc:''}
  	this.getTasksFromService();

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
  			
  		})
  	}
  	show_edit_form(element){
  		this.show_edit=true;
  		console.log('WTF')
  		this.current_task = {_id: element._id, title: element.title, desc: element.desc}
  		console.log(this.current_task)

  		let observable = this._httpService.edit(this.current_task)
  		observable.subscribe(data =>{
  			console.log(data)
  			
  			console.log('edit this motherfucker', data)
  		})
  	}
  	editTask(event){
  		event.preventDefault()
  		console.log('inside editTask')

  		let observable = this._httpService.edit(this.current_task)
  		observable.subscribe(data =>{
  			console.log('updated', data)
  			
  		})
  		this.current_task = {_id:'', title: '', desc: ''}
  		
  	}
  	deleteTask(element){
  		let destroy_task = {
  			_id: element._id,
  			title: element.title,
  			desc: element.desc
  		}
  		console.log(destroy_task)
  		let observable = this._httpService.delete(destroy_task)
  		observable.subscribe(data =>{
  			console.log('deleted', data)
  		})
  	}

}	
