const express = require('express');
const router = express.Router();

const teacherController = require('../app/controllers/TeacherController');

// router.get('/:slug', newsController.show);
router.get('/', teacherController.info);

module.exports = router;