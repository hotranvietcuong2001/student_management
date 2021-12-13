const newsRouter = require('./news');

function route(app) {

    app.use('/news', newsRouter);
      
    // app.get('/', (req, res) => {
    //   res.render('home', {layout: 'mainStudent.hbs'});
    // })

    app.get('/', (req, res) => {
        res.render('home', {layout: 'main.hbs'});
    })

}

module.exports = route;
