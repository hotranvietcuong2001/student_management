const newsRouter = require('./news');
const studentRouter = require('./student');
const officerRouter = require('./officer');
const teacherRouter = require('./teacher');
const adminRouter = require('./admin');

function route(app) {

    app.use('/news', newsRouter);
      
    // app.get('/', (req, res) => {
    //   res.render('home', {layout: 'mainStudent.hbs'});
    // })
    var type_user = 1;
    
    if (type_user == 0)
    {
        app.use('/', adminRouter);
        // app.get('/', (req, res) => {
        //     res.render('users/admin/home', {layout: 'admin.hbs'});
        // })
    } 
    else if (type_user == 1)
    {
        app.use('/', officerRouter);
        // app.get('/', (req, res) => {
        //     res.render('users/officer/home', {layout: 'officer.hbs'});
        // })
    }
    else if (type_user == 2)
    {
        app.use('/', teacherRouter);
        // app.get('/', (req, res) => {
        //     res.render('users/teacher/home', {layout: 'teacher.hbs'});
        // })
    }
    else if (type_user == 3)
    {
        app.use('/', studentRouter);
        // app.get('/', (req, res) => {
        //     res.render('users/student/home', {layout: 'student.hbs'});
        // })
    }

}

module.exports = route;
