let express = require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
	path=require('path');

let Schema = mongoose.Schema;

app.use(bodyParser.json())
app.use(express.static( __dirname + '/client/dist' ));

var AuthorSchema = new mongoose.Schema({
	name: { type: String, minlength: 3, required: [true, 'please enter name']},
	quotes: [{
		type: Schema.Types.ObjectId,
		ref: 'Quote'
	}]


}, {timestamps: true})
 var QuoteSchema = new mongoose.Schema({
 	_author: {
 		type: Schema.Types.ObjectId,
 		ref: 'Author'
 	},
 	content: {
 		type: String,
 		required: [true, 'please enter quote'],
 		minlength: 5,
 		trim: true
 	},
 	votes: {
 		type: Number,
 		default: 0
 	}
 }, {timestamps: true})

mongoose.connect('mongodb://localhost/ranks')
mongoose.Promise = global.Promise;

mongoose.model('Author', AuthorSchema);
mongoose.model('Quote', QuoteSchema);

var Author = mongoose.model('Author')
var Quote = mongoose.model('Quote')

app.post('/authors/addquote/:id', (req, res)=>{
	console.log('adding quote')
	Author.findOne({_id: req.params.id}, (err, author)=>{
		const quote = new Quote({content: req.body.content})
		quote._author = author._id;
		quote.save((err)=>{
			if (err){
				console.log('something went wrong', err)
				res.status(400).json({message:'error', error: err})
			}

			else{
				author.update({$push: {quotes: quote._id}}, (err)=>{
					if(err){
						return res.status(400).json({message:'error', error: err})
					}
					else{
						// author.quotes.push(quote);
						
						return res.json({message: 'success', quote: quote})
					}
				})
			}
		})
	})
})
app.get('/authors/quotes/:id', (req, res)=>{
	Author.findOne({_id: req.params.id})
	.populate('quotes')
	.exec((err, quotes)=>{
		if(err){
			res.status(400).json({message: 'success', error: err})
		}
		else{
			res.json({messgae: 'success', quotes: quotes})
		}
	})
})
app.patch('/vote/up/:id', (req, res)=>{
	Quote.findOneAndUpdate({_id: req.params.id}, {$inc : {votes : 1}})
		.exec((err, votes)=>{
			if(err){
				res.status(400).json({message: 'error', error: err})
				console.log(err)

			}
			else{
				res.json({message:'success', votes: votes})
			}
		})
})

app.patch('/vote/down/:id', (req, res)=>{
	Quote.findOneAndUpdate({_id: req.params.id}, {$inc : {votes : -1}})
		.exec((err, votes)=>{
			if(err){
				res.status(400).json({message: 'error', error: err})
				console.log(err)

			}
			else{
				res.json({message:'success', votes: votes})
			}
		})
})

app.get('/authors', (req, res)=>{
	Author.find({})
	.populate('quotes')
	.exec( (err, authors)=>{
		if(err){
			res.status(400).json({message:'error', error: err});
		}
		else{
			res.json({message:'success', authors: authors})
		}
	})
})
app.get('/author/:id', (req, res)=>{
	console.log('getting author', req.params.id)
	Author.findOne({_id: req.params.id}, (err, author)=>{
		if(err){
			console.log('something went wrong')
			res.status(400).json({message: 'error', error: err})
		}
		else{
			res.json({message: 'success', author: author})
		}
	})
})
app.post('/author/new', (req, res)=>{
	console.log('inside server')
	let author = new Author({name: req.body.name})
	author.save((err)=>{
		console.log('creating author')
		if(err){
			console.log('something went wrong')
			res.status(400).json({message: 'success', error: err})
		}
		else{
			console.log('created author')
			res.json('added product')
		}
	})

})
app.patch('/author/update/:id', (req, res)=>{
	console.log('inside patch method')
	Author.findOne({_id: req.params.id}, (err, author)=>{
		if(err){
			console.log('something really went wrong')
			res.status(400).json({message: 'error', error: err})

		}
		else{
			console.log('updating')
			author.name = req.body.name
			author.save((err)=>{
				if(err){
					console.log('something went wrong')
					res.status(400).json({message: 'success', author: author})
				}
				else{
					console.log('updated the author, coming back')
					res.json({message: 'success'})
				}
			})
		}
	})
})





app.all("*", (req, res, next) => {
	res.sendFile(path.resolve('./client/dist/index.html'))
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})