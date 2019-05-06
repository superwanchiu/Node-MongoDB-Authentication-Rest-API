var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {LoginModel} = require('./models/login');

var app = express();

app.use(bodyParser.json());

app.post('/login',(req,res)=>{
	console.log(req.body);
	var login = new LoginModel({
		UserId: req.body.UserId,
		UserEmail: req.body.UserEmail,
		UserPassword: req.body.UserPassword
	});
    login.save().then((doc)=>{
	   res.status(200).send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.listen(4200,() => {
	console.log('Started on Port 4200');
})

// var otherTodo = new Todo ({
// 	UserId:1,
// 	UserEmail:'dev@test.com',	
// 	UserPassword: 'Lizhu'
// });

// otherTodo.save().then((doc)=>{
//    console.log(JSON.stringify(doc,undefined, 2));
// }, (e)=>{
// 	console.log('Unable to save',e);
// });