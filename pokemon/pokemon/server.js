let express = require('express'),
	app=express(),
	path=require('path'),
	session=require('express-session'),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/pokemon')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static( __dirname + '/angularPoke/dist' ));

app.get('/', (req, res)=>{
	res.json({message: 'success'})
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})