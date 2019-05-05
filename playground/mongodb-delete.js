var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  var db = client.db('UserAuthentication');
  
  //Delete Many
  // db.collection('Todos').deleteMany({UserName: "Admin"}).then((result)=>{
  // 	console.log(result);
  // });

  // Delete One 
  // db.collection('Todos').deleteOne({UserName: "Admin"}).then((result)=>{
  // 	console.log(result);
  // });

   // Delete One And Delete
  db.collection('Todos').findOneAndDelete({UserId: 1}).then((result)=>{
  	console.log(result);
  });
  
});