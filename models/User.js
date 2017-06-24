var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    lname: String,
    email: String,
    usertype: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
