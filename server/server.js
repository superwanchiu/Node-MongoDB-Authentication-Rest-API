
const express = require('express');
const bodyParser = require('body-parser');
const {LoginModel} = require('./models/login');

const app = express();

app.use(bodyParser.json());

app.post('/login',(req,res)=>{
	LoginModel.findOne({
		UserEmail: req.body.UserEmail
	}).then((login) => {
		if(login !== null){
			if(login.UserPassword === req.body.UserPassword){
              res.send({is_sucess:true,login});
			}else{
				res.status(400).send({is_sucess:false,message: "Password is not valid."});
			}			
		}else{
			res.status(400).send({is_sucess:false,message: "Email is not valid."});
		}
	},(e)=>{
		res.status(400).send(e);		
	});
});

app.listen(4200,() => {
	console.log('Started on Port 4200');
});