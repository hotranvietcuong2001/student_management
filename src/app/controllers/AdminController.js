const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class AdminController {

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
        res.render('users/admin/home', {layout: 'admin.hbs'});
    }


}

module.exports = new AdminController;