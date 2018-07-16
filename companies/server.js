let express = require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
	path=require('path');

let Schema = mongoose.Schema;

app.use(bodyParser.json())
app.use(express.static( __dirname + '/client/dist' ));

let CompanySchema = new mongoose.Schema({
	company_name: { type: String, minlength: [3, "name must be 3 characters"], required: [true, 'please enter a name']},
	desc: { type: String, maxlength: 500, required: [true, "description of company is required"]}

}, {timestamps: true})
let UserSchema = new mongoose.Schema({
	name: { type: String, minlength: [3, "name must be 3 characters"], required: [true, "please enter name"]},
	password: { type: String, minlength: [, "password must be 8 characters"], required: [true, "password is required"]}
}, {timestamps: true})

mongoose.connect('mongodb://localhost/company')
mongoose.connect('mongodb://localhost/user')
mongoose.Promise = global.Promise;

mongoose.model('Company', CompanySchema);

var Company = mongoose.model('Company')


app.all("*", (req, res, next) => {
	res.sendFile(path.resolve('./client/dist/index.html'))
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})
