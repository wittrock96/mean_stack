let express = require('express'),
	app=express(),
	path=require('path'),
	session=require('express-session'),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/restful')
var Schema = mongoose.Schema;
var TaskSchema = new mongoose.Schema({
	title: { type: String, required: true},
	desc: {type: String, defaultto: ""},
	completed: {type: Boolean, defaultto: false}

}, {timestamps: true})

mongoose.Promise = global.Promise;
mongoose.model('Task', TaskSchema)

var Task = mongoose.model('Task')


app.use(bodyParser.json())
app.use(express.static( __dirname + '/angularapp/dist' ));

app.get('/tasks', (req, res)=>{
	Task.find({}, (err, tasks)=>{

		if (err){
			console.log('error')
			console.log(err)
			res.json({message: 'error', error: err})
		}
		else{
			console.log(tasks)
			res.json({message: 'success', tasks: tasks})
		}
	})
})
app.get('/tasks/:id', (req, res) => {
	console.log("inside get on client with id", req.params.id);
	let task = Task.findOne({_id: req.params.id}, (err, task)=>{
		if (err){
			console.log('error')
			res.json({message: 'error', error: err})
		}
		else{
			console.log('success')
			console.log(task)
			res.json({message: 'success', task: task})
		}
	})
})
app.post('/create', (req, res)=>{
	console.log('insider server')
	let task = new Task({title: req.body.title, desc: req.body.desc})
	task.save((err, task)=>{
		if (err){
			console.log('error')
			res.json({message: 'error', error: err})
		}
		else{
			console.log('success')
			console.log(task)
			res.json({message: 'success', task: task})
		}
	})
})
app.put('/tasks/:id', (req, res) =>{
	console.log('inside server')
	let task = Task.findOne({_id: req.params.id}, (err, task)=>{
		if(err){
			console.log('error')
			res.json({message: 'error', errors: err})
		}
		else{
			console.log('something has fucked up')
			task.title = req.body.title
			task.desc = req.body.desc
			task.save((err)=>{
				if (err){ 
					res.json({message: 'error', error: err})
				}
				else{
					res.json({message: 'success', task: task})
				}
			})
		}
	})
})
app.delete('/remove/:id', (req, res) =>{
	let task = Task.findOneAndRemove({_id: req.params.id}, (err, task)=>{
		console.log('task deleted')
		res.json({message: 'success'})
	})
})







app.listen(8000, function(){
	console.log('listening on port 8000')
})