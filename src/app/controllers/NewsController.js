const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class NewsController {

    // [GET] /news
    index(req, res, next) {
        // res.render('news');
        Course.find({})
            .then(courses => {
                res.render('news', {courses: multipleMongooseToObject(courses)});
            })
            .catch(next);
    }

    show(req, res) {
        res.send('Hello World!');
    }
}

module.exports = new NewsController;