const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class OfficerController {

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
        res.render('users/officer/home', {layout: 'officer.hbs'});
    }

    updateInfo (req, res) {
        res.render('users/officer/update_info', {layout: 'officer.hbs'});
    }


}

module.exports = new OfficerController;