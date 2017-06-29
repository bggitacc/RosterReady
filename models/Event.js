var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var EventSchema = new Schema({
    
    date: String,
    time: String,
    location: String,
    need: String,
    sport: String,
    email: String,
    teamname: {type : String,
               default: 'off'},
    basketball: {type : String,
               default: 'off'},
             

});


module.exports = mongoose.model('Event', EventSchema);