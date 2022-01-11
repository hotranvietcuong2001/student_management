
const express = require('express');
const router = express.Router();
const passport = require('./../../auth/passport');
const loginController = require('../app/controllers/LoginController');


router.get('/login', loginController.login);

router.post('/login',
    passport.authenticate('local'), loginController.authLogin);

router.get('/', loginController.checkLogin);
// router.post('/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//         }),
// );

module.exports = router;