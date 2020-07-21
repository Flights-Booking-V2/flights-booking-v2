const express = require("express");
const bodyParser = require("body-parser");
var User = require('./models/UserModel');
const path = require("path");
const cors = require("cors");//node module to allow requests from server to server (from react server to backend server)
const users = require('./routes/api/users');
const mongoose = require('mongoose');

//db config 
const db = require('./config/keys').mongoURI;

//----------------------------------------

const app = express();
// app.use("/", express.static(path.join(__dirname, "/client/build")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//-------------------------------------------------------------

// connection to database
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('connected to database successfully'))
.catch((err) => console.log('Error in connecting to database', err));

//for herokuapp to use the static files presented after the build 
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build' ,'index.html'))
  })
}


//using routers 
app.use("/api", users);
app.get('/', (req, res) => {
  res.send('Backend server for Flights Booking app')
})

  

var port = process.env.PORT || 5001;

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});