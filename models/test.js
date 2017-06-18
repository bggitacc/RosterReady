var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var testSchema = new Schema({
  text: String,
  favorited: {
    type: Boolean,
    default: false
  }
});

var dbTester = mongoose.model("dbTester", testSchema);

module.exports = dbTester;