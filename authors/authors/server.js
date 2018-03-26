let express = require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose');

var Schema = mongoose.Schema;

app.use(bodyParser.json())
app.use(express.static( __dirname + '/authorsapp/dist' ));

let AuthorSchema = new mongoose.Schema({
	name: { type: String, required: [true, 'please enter name']}

}, {timestamps: true})




mongoose.connect('mongodb://localhost/author')
mongoose.Promise = global.Promise;

mongoose.model('Author', AuthorSchema)


var Author = mongoose.model('Author')


app.get('/authors', (req, res)=>{
	let authors = Author.find({}, (err, authors)=>{
		if (err){
			res.json(err.message);

		}
		else{
			res.json({authors: authors})
		}
	})
})
app.post('/authors/new', (req, res)=>{
	let author = new Author({name: req.body.name})
	console.log('inside server')
	author.save((err)=>{
		if(err){
			console.log(err)
			console.log('am i in the errors, yes i am')
			res.json({message: 'Error', error: err})

		}
		else{
			console.log('success')
			res.json('added an author')
		}
	})
})
app.put('/edit/:id', (req, res)=>{
	Author.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}, (err, author)=>{
		if (err){
			res.json({message: 'error', error: err})
		}
		else{
			res.json('you have updated this author', {author: author})
		}
	})

})
app.listen(8000, ()=>{
	console.log('listening on port 8000')
})






