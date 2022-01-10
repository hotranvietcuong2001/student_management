
const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/LoginController');


router.get('/create_account', adminController.createAccount);
router.post('/store', adminController.store);
router.get('/set_rule', adminController.setRule);
router.get('/update_info', adminController.updateInfo);
router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.saveUpdates);
router.delete('/:id', adminController.delete);
router.get('/', adminController.info);

module.exports = router;