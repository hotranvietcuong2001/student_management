const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose')

class TeacherController {

    // [GET] /news
    // index(req, res, next) {
    //     // res.render('news');
    //     Course.find({})
    //         .then(courses => {
    //             res.render('news', {courses: multipleMongooseToObject(courses)});
    //         })
    //         .catch(next);
    // }

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