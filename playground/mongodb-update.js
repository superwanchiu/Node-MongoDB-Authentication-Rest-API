var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  console.log("Database created!");

  var db = client.db('UserAuthentication');
  
  db.collection('Todos').findOneAndUpdate({
  	_id: new ObjectId("5ccf2e222d22ee2c90dbda52")
  }, {
  	$set: {
  		UserEmail: 'Admin@mail.com'
  	}
  },{
  	returnOriginal: false
  }).then((result) => {
  	console.log(result);
  });
  
});