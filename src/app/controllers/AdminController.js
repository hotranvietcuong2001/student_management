const User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

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
        res.render('users/home', {layout: 'admin.hbs'});
    }

    createAccount (req, res) {
        res.render('users/admin/create_account', {layout: 'admin.hbs'});
    }

    store(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/create_account'))
            .catch(err => {});
    }

    setRule (req, res) {
        res.render('users/admin/set_rule', {layout: 'admin.hbs'});
    }

    updateInfo (req, res, next) {

        User.find({})
            .then(users => {
                res.render('users/admin/update_info', {layout: 'admin.hbs', users: multipleMongooseToObject(users)});
            })
            .catch(next);

    }

    edit (req, res, next) {
        User.findById(req.params.id)
            .then(user => res.render('users/admin/edit', {layout: 'admin.hbs', user: mongooseToObject(user)}))
            .catch(next);
    }


    saveUpdates (req, res, next) {
        User.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/update_info'))
            .catch(next);
    }


}

module.exports = new AdminController;