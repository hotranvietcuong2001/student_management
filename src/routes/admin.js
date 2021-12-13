
const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

// router.get('/:slug', newsController.show);
router.get('/', adminController.info);

module.exports = router;