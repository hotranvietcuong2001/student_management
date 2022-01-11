const User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class AdminController {
    info (req, res) {
        res.render('users/home', {layout: 'admin.hbs'});
    }

    createAccount (req, res) {
        res.render('users/admin/create_account', {layout: 'admin.hbs'});
    }

    store(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/:admin/create_account'))
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


    delete(req, res, next) {
        User.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/update_info'))
            .catch(next);
    }


}

module.exports = new AdminController;