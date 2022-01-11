const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose')

class StudentController {

    info (req, res) {
        res.render('users/home', {layout: 'student.hbs'});
    }

    result (req, res) {
        res.render('users/student/result', {layout: 'student.hbs'});
    }

}

module.exports = new StudentController;