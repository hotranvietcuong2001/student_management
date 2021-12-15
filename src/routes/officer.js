const express = require('express');
const router = express.Router();

const officerController = require('../app/controllers/OfficerController');

// router.get('/:slug', newsController.show);
router.get('/updateinfo', officerController.updateInfo);
router.get('/report', officerController.report);
router.get('/', officerController.info);


module.exports = router;