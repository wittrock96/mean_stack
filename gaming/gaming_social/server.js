let express = require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
	path=require('path');
	Schema = mongoose.Schema;
	osmosis = require('osmosis')
	needle = require('needle')

var	pRequest = require("promisified-request").create()
	fScraper = require("form-scraper")
	loginDetails = {loginfmt:"cole.wittrock0@gmail.com", passwd:'Babysteps78'}
	formProvider = new fScraper.ScrapingFormProvider();
	formSubmitter = new fScraper.FormSubmitter()


app.use(bodyParser.json())
app.use(express.static( __dirname + '/manylives/dist' ));

var data = {
	email: 'cole.wittrock0@gmail.com',
	passwd: 'Babysteps78'
}
app.get('/signin', (req, res)=> {
	console.log('inside home page server')
	needle.post('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1524772718&rver=6.5.6509.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.xbox.com:443%2Fpassport%2FsetCookies.ashx%3Frru%3Dhttps%253a%252f%252faccount.xbox.com%252fen-US%252fAccount%252fSignin%253freturnUrl%253dhttps%25253a%25252f%25252fwww.xbox.com%25253a443%25252fen-US%2526pcexp%253dtrue%2526uictx%253dme&lc=1033&id=292543&cbcxt=0&lw=1&cobrandid=90011&fl=email',
		data,
	 {multipart: true})
	.on('readable', ()=>{})
	.on('end', ()=>{
		console.log('maybe this worked, but probably not')
	})
	return res.json("all done here")

})








app.all("*", (req, res, next) => {
	res.sendFile(path.resolve('./manylives/dist/index.html'))
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})
