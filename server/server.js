var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/UserAuthentication',{useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
	UserId:{
	   type: Number	
	},
	UserName: {
		type: String
	},
	UserEmail: {
		type: String
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
	UserId:2,
	UserName: 'Lizhu',
	UserEmail:'dev@test.com'
});

otherTodo.save().then((doc)=>{
   console.log(JSON.stringify(doc,undefined, 2));
}, (e)=>{
	console.log('Unable to save',e);
});