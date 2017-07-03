var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");
var Event = require("../models/Event");

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
    teamcat: req.body.teamcat,
    location: req.body.location,
    picurl: req.body.picurl
   
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
    if (req.body.lname !== "") {req.user.lname = req.body.lname}
    if (req.body.username !=="") {req.user.username = req.body.username}
    if (req.body.email !== "") {req.user.email = req.body.email}
    if (req.body.phone !== "") {req.user.phone = req.body.phone}
    if (req.body.picurl !== "") {req.user.picurl = req.body.picurl}
    if (req.body.baseball == null) {var baseball = "off"}else{var baseball = "on"}
    if (req.body.basketball == null) {var basketball = "off"}else{var basketball = "on"}
    if (req.body.soccer == null) {var soccer = "off"}else{var soccer = "on"}
    if (req.body.vollyball == null) {var vollyball = "off"}else{var vollyball = "on"}
    if (req.body.football == null) {var football = "off"}else{var football = "on"}
   
    req.user.status = req.body.status
   

   console.log("New User = " + req.user._id)

   console.log(req.user._id)

   User.findByIdAndUpdate(req.user._id,{$set : { name : req.user.name,
                                                lname: req.user.lname,
                                                username: req.user.username,
                                                email: req.user.email,
                                                phone: req.user.phone,
                                                baseball: baseball,
                                                basketball: basketball,
                                                soccer: soccer,
                                                vollyball: vollyball,
                                                football: football,
                                                status: req.body.status}},
                                                {new:true}, 
                                                function (err,doc){
    console.log( "This is doc = " + doc)
    res.render('account',{user: doc})

   });
  
};

userController.updateteam = function(req, res) {
  
  console.log(req.body)

   console.log("User = " + req.user)

   
    if (req.body.name !== "") {req.user.name = req.body.name}
    if (req.body.lname !== "") {req.user.lname = req.body.lname}
    if (req.body.username !=="") {req.user.username = req.body.username}
    if (req.body.email !== "") {req.user.email = req.body.email}
    if (req.body.phone !== "") {req.user.phone = req.body.phone}
    if (req.body.teamname !== "") {req.user.teamname = req.body.teamname}
    
   
    req.user.status = req.body.status
   

   console.log("New Team = " + req.user._id)

   console.log(req.user._id)

   User.findByIdAndUpdate(req.user._id,{$set : { name : req.user.name,
                                                lname: req.user.lname,
                                                username: req.user.username,
                                                email: req.user.email,
                                                phone: req.user.phone,
                                                teamname: req.user.teamname,
                                                status: req.body.status}},
                                                {new:true}, 
                                                function (err,doc){
    console.log( "This is doc = " + doc)
    res.render('account',{user: doc})

   });
  
};

// To React Test page
userController.react = function(req, res) {

  res.render('react', { user : req.user });
};

module.exports = userController;
