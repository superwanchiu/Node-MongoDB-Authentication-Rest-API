var mongoose = require('mongoose');


var LoginModel = mongoose.model('login', {
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

module.exports = {LoginModel};