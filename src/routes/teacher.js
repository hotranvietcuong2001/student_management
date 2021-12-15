const express = require('express');
const router = express.Router();

const teacherController = require('../app/controllers/TeacherController');

// router.get('/:slug', newsController.show);
router.get('/input_score', teacherController.inputScore);
router.get('/report', teacherController.report);
router.get('/', teacherController.info);

module.exports = router;