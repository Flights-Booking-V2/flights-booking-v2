const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateSignupInput = require("../../validation/signup");
const validateSigninInput = require("../../validation/login");

var User = require('../../models/UserModel');

//----------------------SignIn and SignUp----------------------------//
//SignIn
router.post("/signin", (req, res) => {
    // Form validation
  const { errors, isValid } = validateSigninInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 2629746 // 1 month in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

//SignUp
router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
//-------------------------------------------------------

//Get all users from database 
router.get("/users", function (req, res) {
    User.find({})
    .then((data) => {
        console.log('Request to get data: success');
        res.send(data);
    })
    .catch((err) => console.log('Error in gettin data', err));
  });
  //-------------------------------------------------------
  

//search for 1 user baesed on name 
router.get("/users/:name", function (req, res) {
    var name = req.params.name;
    User.find({ name: name })
    .then(((data) => {
      if(data.length !== 0) {
        console.log(`found user ${name}`, data);
        res.send(data);
      }else {
        res.send('No such user');
      }
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

module.exports = router;
  