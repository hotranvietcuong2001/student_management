const studentRouter = require("./student");
const officerRouter = require("./officer");
const teacherRouter = require("./teacher");
const adminRouter = require("./admin");
const loginRouter = require("./login");
const {authUser} = require("./basicAuth")
// const authRouter = require('./../../auth/authRouter');

function test(req, res, next, role) {
  console.log(role);
  const { user } = req;
  console.log(user);
  if (user.role === role) 
    next();
  else 
    res.json({ error: "404 Page not found" })
}

function route(app) {
  app.use("/", loginRouter);

//   app.use(
//     "/",
//     (req, res, next) => {
//       test(req, res, next, "officer");
//     },
//     officerRouter
//   );
  

  app.use(
    '/admin',
    (req, res, next) => {
      test(req, res, next, "admin");
    },
    adminRouter
  );

  app.use(
    "/officer",authUser,
    (req, res, next) => {
      test(req, res, next, "officer");
    },
    officerRouter
  );
  
  app.use(
    "/teacher",authUser,
    (req, res, next) => {
      test(req, res, next, "teacher");
    },
    teacherRouter
  );
  app.use(
    "/student",authUser,
    (req, res, next) => {
      test(req, res, next, "student");
    },
    studentRouter
  );

  // res.json({ error: "404 Page not found" });


  // var type_user = 0;
  // if (type_user == 0)
  // {

  //     app.use('/', adminRouter);
  // }
  // else if (type_user == 1)
  // {
  //     app.use('/', officerRouter);
  // }
  // else if (type_user == 2)
  // {
  //     app.use('/', teacherRouter);
  // }
  // else if (type_user == 3)
  // {
  //     app.use('/', studentRouter);
  // }
}

module.exports = route;
