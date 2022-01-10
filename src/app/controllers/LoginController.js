const User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class LoginController {
    login (req, res) {
        res.render('login', {layout: 'login.hbs'});
    }

    
}

module.exports = new LoginController;