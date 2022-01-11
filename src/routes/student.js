const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentController');

router.get('/result', studentController.result);
router.get('/', studentController.info);


module.exports = router;