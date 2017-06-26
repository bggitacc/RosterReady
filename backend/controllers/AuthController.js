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

  

  

  User.register(new User({
    
    name: req.body.name,
    lname: req.body.lname,
    username : req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    usertype: req.body.usertype,
    baseball: req.body.baseball,
    basketball: req.body.basketball,
    soccer: req.body.soccer,
    vollyball: req.body.vollyball,
    football: req.body.football,
    teamname: req.body.teamname,
    gender: req.body.gender,
    status: req.body.status,
    teamcat: req.body.teamcat
   
              }), req.body.password, function(err, user) {


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

userController.account = function(req, res) {
  console.log(req)
  res.render('account', { user : req.user });
};

userController.updateuser = function(req, res) {
  console.log(req.body)
   console.log("User = " + req.user)
   
    if (req.body.name !== "") {req.user.name = req.body.name}

   console.log("New User = " + req.user)
  
};
module.exports = userController;
