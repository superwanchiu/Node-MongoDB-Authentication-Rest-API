var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/UserAuthentication',{useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
	UserId:{
	   type: Number	,
	   default: null
	},
	UserEmail: {
		type : String,
	    required : true,
	    trim : true
	},
	UserPassword : {
		type : String,
	    required : true
	}
});

// var newTodo = new Todo({
// 	UserName: 'Lizhu'
// });

// newTodo.save().then((doc)=>{
// 	console.log('Saved Todo',doc);
// }, (e)=>{
// 	console.log('Unable save to do');
// })

var otherTodo = new Todo ({
	UserId:1,
	UserEmail:'dev@test.com',	
	UserPassword: 'Lizhu'
});

otherTodo.save().then((doc)=>{
   console.log(JSON.stringify(doc,undefined, 2));
}, (e)=>{
	console.log('Unable to save',e);
});