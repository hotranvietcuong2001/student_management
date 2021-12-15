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

    createAccount (req, res) {
        res.render('users/admin/create_account', {layout: 'admin.hbs'});
    }

    setRule (req, res) {
        res.render('users/admin/set_rule', {layout: 'admin.hbs'});
    }

    update (req, res) {
        res.render('users/admin/update_info', {layout: 'admin.hbs'});
    }


}

module.exports = new AdminController;