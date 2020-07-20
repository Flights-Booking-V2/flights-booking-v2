const express = require('express');
const router = express.Router();
var User = require('../../models/UserModel');


//Get all users from database 
router.get("/users", function (req, res) {
    User.find({})
    .then((data) => {
        console.log('Request to get data: success');
        req.send(data);
    })
    .catch((err) => console.log('Error in gettin data', err));
  });
  //-------------------------------------------------------
  
// Add Users to DataBase
router.post("/users", function (req, res) {
    const { name,email,password } = req.body;
    var newUser = new User({
        name: name,
        email: email,
        password: password
    });
    newUser.save()
    .then(() => console.log('new user saved to database'))
    .catch((err) => console.log('Error in saving user to database', err));
});
//-------------------------------------------------------

//search for 1 user baesed on name 
router.get("/users/:name", function (req, res) {
    var name = req.params.name;
    User.find({ name: name })
    .then(((data) => {
        console.log(`found user ${name}`, data);
        res.send(data);
    }))
    .catch((err) => console.log(`Error in finding user ${name}`, err));
});

//---------------------------------------

//delete user by name
router.delete("/users/:name", function (req, res) {
    var name = req.params.name;
    User.remove({ name: name })
    .then(((result) => {
        console.log(`delete user ${name}`);
        res.sendStatus(202);
        res.send(`user ${name} deleted `, result);
    }))
    .catch((err) => console.log(`Error in deleting user ${name} from database`, err));
});

//find a user based on Email address
router.get("/users/:email", function (req, res) {
var email = req.params.email;
User.find({ email: email })
.then(((data) => {
    console.log(`found user with email ${email}`);
    res.send(data);
}))
.catch((err) => console.log(`Error in finding user ${email} in database`, err));
});

module.exports = router;
  