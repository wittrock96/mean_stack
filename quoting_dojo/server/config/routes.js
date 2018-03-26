const mongoose = require('mongoose')
const User = mongoose.model('User');

module.exports = (app) =>{

	app.get('/', (req, res) => {
		
		res.render('index')
	})
	app.get('/quotes', (req, res)=>{
		User.find({}, (err, users) => {
			if (err) {
				console.log('something fucked up')
				res.render('index', {errors: user.errors})

			}
			else{
				res.render('success', {data: users})
			}
	})
		
	})
	app.post('/quotes', (req, res) =>{
		console.log('POST DATA', req.body)
		var user = new User(req.body);
		user.save((err)=>{
			if(err){
				console.log('something fucked up')
				res.render('index', {errors: user.errors})
			}
			else{
				console.log('success')
				res.redirect('/quotes')
			}
		})
	})
}