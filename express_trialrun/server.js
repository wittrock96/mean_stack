var express = require("express");
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express();
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/static"))
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	
	
   if(req.session.count == null){
    req.session.count = 0;
  }
  req.session.count ++;
    res.render('users', {count: req.session.count})
})
app.post('/two', function(req, res) {
 req.session.count ++;
 res.redirect('/');
})

app.post('/reset', function(req, res) {
 req.session.count = 0;
 res.redirect('/');
})
app.post('/', function(request, resume){
	console.log("POST DATA \n\n", request.body)
	console.log("you just submitted")
	resume.redirect('/')
})


app.listen(8000, function(){
	console.log("listening on 8000")
})