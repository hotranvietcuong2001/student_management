const express = require('express');
const router = express.Router();

const officerController = require('../app/controllers/OfficerController');

// router.get('/:slug', newsController.show);
router.get('/update_info', officerController.updateInfo);
router.get('/create_account', officerController.createAccount);
router.post('/store', officerController.store);
router.get('/report', officerController.report);
router.get('/:id/edit', officerController.edit);
router.put('/:id', officerController.saveUpdates);
router.delete('/:id', officerController.delete);
router.get('/', officerController.info);


module.exports = router;