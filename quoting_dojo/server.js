let express = require('express')
	app = express(),
	path = require('path')
	session = require('express-session')
	body_parser = require('body-parser')
	mongoose = require('mongoose')

var	UUID = require('UUID')

var UserSchema = new mongoose.Schema({
	name: {type:String, required:true, minlength: 3},
	quote: {type:String, required:true, minlength:10}
}, {timestamps: true})
mongoose.Promise = global.Promise;
mongoose.model('User', UserSchema)
var User = mongoose.model('User')

mongoose.connect('mongodb://localhost/dojo_quotes')
app.use(body_parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"static")));
app.use(session({
	secret: "fjadstjprjgkperjwkgjskfgmweogkaosfmgokgasg",
	proxy: true,
	resave: false,
	saveUinitialized: true
}))


app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)
app.listen(8000, ()=>{
	console.log('listening on port 8000')
})