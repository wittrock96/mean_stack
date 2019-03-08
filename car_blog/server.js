let express = require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
	path=require('path'),
	session = require('express-session'),
	bcrypt = require('bcryptjs'),
	salt = bcrypt.genSaltSync(10),
	hash = bcrypt.hashSync("B4c0/\/email", salt),
	multer = require('multer'),
	fs = require('fs');

	// GridFsStorage = require('multer-gridfs-storage'),
	// Grid = require('gridfs-stream'),
	// methodOverride = require('method-override');


var Schema = mongoose.Schema;
var upload = multer({dest: 'uploads/',
	rename: (fieldname, filename)=>{
		return filename;
	}});
app.use(express.static( __dirname + "/carBlog/dist/carBlog" ));




app.use(session({
  secret: 'afsdghlfgjalk;fsdgjikafsdjgop',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.json());



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
	year: {type: String, minlength: 4},
	make: { type: String, minlength: 3, required: [true, 'please enter make of vehicle']},
	model: {type: String, minlength: 3 },
	description: {type: String, minlength: 10, required: [true, 'please enter a price']},
	img: { data: Buffer, contentType: String },
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




//mongo URI
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true });



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
app.get('/testing/session', (req, res)=>{
	if (!req.session.user) {
		return res.status(401).send()
	}
	else{
		return res.status(200).send("welcome the showroom")
	}
})
app.post('/signin', (req, res)=>{
	console.log('inside /signin')
	
	let user = User.findOne({email: req.body.email}, (err, user)=>{
	console.log(user)	
		if(err){
			console.log('wrong email in /login')
			console.log(user.first_name)
			return res.status(400).json({message: 'error', error: err});

		}
		else{
			// console.log(user.first_name)
			bcrypt.compare(req.body.password, user.password, (err, response)=>{
				if (response == true) {
					req.session.user = user;
					console.log('session name', req.session.user.first_name)
					console.log('user logged in')
					res.json({message: 'logged in', user: user})
				}
				else{
					console.log('something went wrong coparing passwords')
					return res.status(400).json({message: 'error', error: err})
				}
			})
		}
	})
})

app.get('/logout', (req, res)=>{
	console.log('logging out user')
	if (req.session.user) {
		req.session.destroy((err)=>{
			if (err) {
				console.log('error loggin out sesssion user')
				return res.status(401).json({message: 'error', error: err})
			}
			else{
				console.log('user logged out')
				res.json({message: "logged out"})
			}
		})
	}
	else{
		res.json({message: "no user to log out"})
		console.log("no user to log out")
	}
})

app.post('/review/new', (req, res)=>{
	console.log('inside /review/new')
	if (!req.session.user) {
		return res.status(401).send({message: "please login to create a review"})
	}
	let review = new Review({
		_user: req.session.user._id,
		year: req.body.year,
		make: req.body.make,
		model: req.body.model,
		description: req.body.description
	})
	// review.img.data = fs.readFileSync(req.files.photo.path)
	// review.img.contentType = 'image/jpeg';
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
app.get('/reviews', (req, res)=>{
	Review.find({}, (err, reviews)=>{
		if(err){
			console.log('soemthing went wrond getting reviews')
			return res.json({message:'error', error: err})
		}
		else{
			console.log('got reviews coming back')
			return res.json({message: 'success', reviews: reviews})
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