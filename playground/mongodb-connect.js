var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  console.log("Database created!");

  var db = client.db('UserAuthentication');

  db.collection('Todos').insertOne({
  	UserId: 1,
  	UserName: "Admin",
  	UserEmail: "test@mail.com"
  },(error,result)=>{
  	if (err) {
  		return console.log('unable to insert todo', err);
  	}

  	console.log(JSON.stringify(result.ops, undefined, 2));
  	client.close();
  });
  
});