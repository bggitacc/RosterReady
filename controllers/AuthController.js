var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  var rtype = req.param('id')
  console.log("registration type = " + rtype)
  res.render('register', { rtype : rtype});
};

// Go to registration page
userController.registertype = function(req, res) {
  res.render('registertype');
};

// Post registration
userController.doRegister = function(req, res) {

     console.log(req.body)

     var opt1 = req.body.option1
     if (typeof(opt1) == 'undefined') {
       opt1 = "off"
     }
     var opt2 = req.body.option2
       if (typeof(opt2) == 'undefined') {
       opt2 = "off"
     }
     var opt3 = req.body.option3
       if (typeof(opt3) == 'undefined') {
       opt3 = "off"
     }
     var opt4 = req.body.option4
       if (typeof(opt4) == 'undefined') {
       opt4 = "off"
     }
     var opt5 = req.body.option5
       if (typeof(opt5) == 'undefined') {
       opt5 = "off"
     }
    var usert = req.body.usertype
     console.log(usert)
     console.log(opt2)
     console.log(opt3)
     console.log(opt4)
     console.log(opt5)
  

  

  User.register(new User({
    username : req.body.username,
    name: req.body.name,
    lname: req.body.lname,
    email: req.body.email,
    usertype: req.body.usertype,
    option1: opt1,
    option2: opt2,
    option3: opt3,
    option4: opt4,
    option5: opt5
   
                }), req.body.password, function(err, user) {
    console.log(req.body)
    console.log(user);
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/')
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;
