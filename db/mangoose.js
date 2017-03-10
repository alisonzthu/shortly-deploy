var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Success connecting to mangoose!');

  var urlsSchema = mongoose.Schema({
    id: Number,  // Should we set a primary key?
    url: String,
    baseUrl: String,
    code: Number,
    title: String,
    visits: Number,
    timestamp: Date  
  });
  // console.log('schema created', urlsSchema);

  // Creating a model for a url item
  exports.Urls = mongoose.model('Urls', urlsSchema);  // May have to move export out of callback
  
  // console.log('get the model', Urls);
  // create one item for the Urls table
  // var url = new Urls({url: 'http://yahoo.com'});
  // console.log(url.url);

  var usersSchema = mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    timestamp: Date
  });

  exports.Users = mongoose.model('Users', usersSchema);
});

