let express = require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
	path=require('path'),
	session = require('express-session'),
	bcrypt = require('bcryptjs'),
	salt = bcrypt.genSaltSync(10),
	hash = bcrypt.hashSync("B4c0/\/email", salt);

var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + "/carBlog/dist/carBlog" ));

app.use(session({
	resave: false,
	saveUinitialized: false,
	proxy: true,
	secret: "fjadstjprjgkperjwkgjskfgmweogkaosfmgokgasg",
	cookie: { maxAge: 60 * 100}
}))

let UserSchema = new mongoose.Schema({
	first_name: { type: String, minlength:3, required:[true, "enter first name"]},
	last_name: { type: String, minlength: 3, required:[true, "enter last name"]},
	username: { type: String, minlength: 3, required:[true, "please decide your username"]},
	email: { type: String, minlength:3, required:[true, "please enter email"]},
	password: {type: String,
		required: true,
		minlength: 8,
		validate: {
			validator:(value)=>{
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			},
			message: "password must contain 1 number, 1 uppercase, and 1 special character"
		}
	},
	_review: [{type: Schema.Types.ObjectId, ref: 'reviews'}],
	_comment: [{ type: Schema.Types.ObjectId, ref: 'comments'}]
}, {timestamps: true})

let ReviewSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	make: { type: String, minlength: 3, required: [true, 'please enter make of vehicle']},
	model: {type: String, minlength: 3 },
	description: {type: String, minlength: 10, required: [true, 'please enter a price']},
	_rating: { type: Schema.Types.ObjectId, ref: 'ratings'},
	_comment: [{ type: Schema.Types.ObjectId, ref: 'comments'}]
}, {timestamps: true})

let CommentSchema = new mongoose.Schema({
	_review: { type: Schema.Types.ObjectId, ref: 'Review'},
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	comment: {type: String, minlength: 3}
}, { timestamps: true})

let RatingSchema = new mongoose.Schema({
	_review: { type: Schema.Types.ObjectId, ref: 'Review'},
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	rating: { type: Number }
}, { timestamps: true} )





mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true })

mongoose.model('User', UserSchema)
mongoose.model('Review', ReviewSchema)
mongoose.model('Comment', CommentSchema)
mongoose.model('Rating', RatingSchema)


var Review = mongoose.model('Review')
var User = mongoose.model('User')
var Comment = mongoose.model('Comment')
var Rating = mongoose.model('Rating')

app.post('/registration', (req, res)=>{
	console.log('inside /registration')

	let user = new User({first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password})
	let hash = bcrypt.genSaltSync(10);
	bcrypt.hash(user.password, salt, (error, hash) => {
		if (error){
			console.log(error)
			console.log("password could not be hashed")
		}
		else{
			user.password = hash;
			user.save((err, user)=>{
				if(err){
					
					console.log('something went wrong in /registration after hash')
					return res.status(400).json({message:'error', error: err});
				}
				else{
					console.log('user created')
					res.json("user added")
				}
			})
		}
	})
})

app.post('/review/new', (req, res)=>{
	console.log('inside /review/new')

	let review = new Review({
		make: req.body.make,
		model: req.body.model,
		description: req.body.description
	})

	review.save((err)=>{
		if(err){
			console.log("something went wrong when saving reveiw")
			return res.status(400).json({message: 'error', error: err})
		}
		else{
			console.log('created review, heading to html')
			res.json("added review")
		}
	})
})


// app.get('/products', (req, res)=>{
// 	Product.find({}, (err, products)=>{
// 		if(err){
// 			console.log('error in finding all')
// 			res.json({message:'error', error: err})
// 		}
// 		else{
// 			console.log(products)
// 			res.json({message: 'success', products: products})
// 		}
// 	})
// })

// Angular Catch all
app.all("*", (req, res, next) => {
	res.sendFile(path.resolve('./carBlog/dist/carBlog/index.html'))
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})