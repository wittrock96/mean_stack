import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient) { 
  	this.getTasks();
  }
	getTasks(){
		
		return this._http.get('/tasks')
	}
	getTaskById(id){
		console.log("inside get task by id");
		return this._http.get('/tasks/' + id)
	}
	create(newtask){
		console.log('inside create')
		return this._http.post('/create', newtask)
	}
	edit(current_task){
		console.log('inside edit')
		return this._http.put(`/tasks/${current_task._id}`, current_task)
	}
	delete(destroy_task){
		console.log('deleting')
		return this._http.delete(`/remove/${destroy_task._id}`)
	}
	

}

