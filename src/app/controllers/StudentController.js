const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose')

class StudentController {

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
        res.render('users/home', {layout: 'student.hbs'});
    }

    result (req, res) {
        res.render('users/student/result', {layout: 'student.hbs'});
    }

}

module.exports = new StudentController;