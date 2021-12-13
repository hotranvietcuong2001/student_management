const Course = require('../models/Course');
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
        res.render('users/student/home', {layout: 'student.hbs'});
    }


}

module.exports = new StudentController;