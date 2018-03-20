let express = require('express')
	app = express(),
	path = require('path')
	session = require('express-session')
	body_parser = require('body-parser')
	mongoose = require('mongoose')

var	UUID = require('UUID')

var UserSchema = new mongoose.Schema({
	first_name: {type:String, required:true, minlength: 3},
	last_name: {type:String, required:true, minlength: 3},
	age: {type: Number, min: 12, max: 99},
	email: {type: String, required:true, minlength:6}
}, {timestamps: true})
mongoose.Promise = global.Promise;
mongoose.model('User', UserSchema)
var User = mongoose.model('User')

mongoose.connect('mongodb://localhost/mongoose_basic')
app.use(body_parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"static")));
app.use(session({
	secret: "fjadstjprjgkperjwkgjskfgmweogkaosfmgokgasg",
	proxy: true,
	resave: false,
	saveUinitialized: true
}))


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	req.session.name = req.body.name;
	res.render('index')
})
app.post('/users', (req, res)=>{
	console.log("POST DATA", req.body);
	var user = new User(req.body);
	user.save((err)=>{
		if (err){
			console.log('something fucked up')
			res.render('index', {errors: user.errors})
		}
		else{
			console.log('successfully added a user')
			res.redirect('/');
		}
	})
	
})
// app.get('/', (req, res)=>{
// 	User.find( (err, users)=>{

// 	})
// })

app.listen(8000, ()=>{
	console.log('listening on port 8000')
})