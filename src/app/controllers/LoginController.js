const User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const studentRouter = require('../../routes/student');
const officerRouter = require('../../routes/officer');
const teacherRouter = require('../../routes/teacher');
const adminRouter = require('../../routes/admin');

class LoginController {
    checkLogin (req, res, next) {
        // check login
        // Neu chua login, redirect login
            res.redirect('/login')
        
    }

    authLogin(req,res){
        if(req.user){
            // isLogin = true;   
            // res.redirect('/:admin');
            console.log(req.user.role);
            if(req.user.role === 'admin'){
                res.redirect('/admin');
            }
            else if(req.user.role === 'officer'){
                res.redirect('/officer');
            }
            else if(req.user.role === 'teacher'){
                res.redirect('/teacher');
            }
            else if(req.user.role === 'student'){
                res.redirect('/student');
            }    
        }
        else {
            res.redirect('/login');
            // isLogin = false;
        }
    }
    login (req, res) {
        res.render('login', {layout: 'login.hbs'});
    }

}

module.exports = new LoginController;