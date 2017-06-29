var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    
    name: String,
    lname: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    baseball: {type : String,
               default: 'off'},
    basketball: {type : String,
               default: 'off'},
    soccer: {type : String,
               default: 'off'},
    vollyball: {type : String,
               default: 'off'},
    football: {type : String,
               default: 'off'},
    teamname: {type: String,
               default: 'none'},
    gender: {type : String,
               default: 'none'},
    status: {type : String,
               default: 'true'},
    usertype: {type: String,
                default: 'player'},
    teamcat: {type : String,
               default: 'none'},
    location: {type : String,
               default: 'San Diego City'}           

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
