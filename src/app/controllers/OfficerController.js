const User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class OfficerController {
    info (req, res) {
        res.render('users/home', {layout: 'officer.hbs'});
    }

    createAccount(req, res){
        res.render('users/officer/create_account', {layout: 'officer.hbs'});
    }

    store(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/officer/create_account'))
            .catch(err => {});
    }

    updateInfo (req, res, next) {
        User.find({ role: ['student', 'teacher'] })
        .then(users => {
            res.render('users/officer/update_info', {layout: 'officer.hbs', users: multipleMongooseToObject(users)});
        })
        .catch(next);
    }

    report (req, res) {
        res.render('users/officer/report', {layout: 'officer.hbs'});
    }

    edit (req, res, next) {
        User.findById(req.params.id)
            .then(user => res.render('users/officer/edit', {layout: 'officer.hbs', user: mongooseToObject(user)}))
            .catch(next);
    }


    saveUpdates (req, res, next) {
        User.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/officer/update_info'))
            .catch(next);
    }

    delete(req, res, next) {
        User.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/officer/update_info'))
            .catch(next);
    }
}

module.exports = new OfficerController;