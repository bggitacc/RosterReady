// Twilio Credentials 
var accountSid = 'AC46c91e3efb21432674ea794ea587d9ba'; 
var authToken = '160c47726629958e43e827f7a0cd6cb7'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+16192458207", 
    from: "+16198783900", 
    body: "This is a test of roster ready text", 
}, function(err, message) { 
    console.log(message.sid); 
});
