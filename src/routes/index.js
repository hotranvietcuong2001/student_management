const studentRouter = require('./student');
const officerRouter = require('./officer');
const teacherRouter = require('./teacher');
const adminRouter = require('./admin');

function route(app) {
    var type_user =0;
    
    if (type_user == 0)
    {
        app.use('/', adminRouter);
    }
    else if (type_user == 1)
    {
        app.use('/', officerRouter);
    }
    else if (type_user == 2)
    {
        app.use('/', teacherRouter);
    }
    else if (type_user == 3)
    {
        app.use('/', studentRouter);
    }

}

module.exports = route;
