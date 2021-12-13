const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentController');

// router.get('/:slug', newsController.show);
router.get('/', studentController.info);

module.exports = router;