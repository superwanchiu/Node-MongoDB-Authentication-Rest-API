var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/UserAuthentication', { useNewUrlParser: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var LoginModel = mongoose.model('login', {
	UserId:{
	   type: Number	,
	   default: null,
	   unique: true,
	},
	UserEmail: {
		type : String,
	    required : true,
	    trim : true,
	    unique: true,
	},
	UserPassword : {
		type : String,
	    required : true
	}
});

module.exports = {LoginModel};