const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose')

class TeacherController {
    
    info (req, res) {
        res.render('users/home', {layout: 'teacher.hbs'});
    }

    inputScore (req, res) {
        res.render('users/teacher/input_score', {layout: 'teacher.hbs'});
    }

    report (req, res) {
        res.render('users/teacher/report', {layout: 'teacher.hbs'});
    }

}

module.exports = new TeacherController;