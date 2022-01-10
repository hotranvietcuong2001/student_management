const User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class LoginController {
    checkLogin (req, res, next) {
        // check login
        // Neu chua login, redirect login
        res.redirect('/login')
        
    }

    login (req, res) {
        res.render('login', {layout: 'login.hbs'});
    }

    
}

module.exports = new LoginController;