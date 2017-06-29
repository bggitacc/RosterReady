var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register/:id', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);
// route for account action
router.get('/account', auth.account);

// route for update account action
router.post('/updateuser', auth.updateuser);


// route for update account action
router.post('/updateteam', auth.updateteam);

// route for React Test
router.get('/react', auth.react);

module.exports = router;
