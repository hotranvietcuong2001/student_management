
const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.get('/create_account', adminController.createAccount);
router.post('/store', adminController.store);
router.get('/set_rule', adminController.setRule);
router.get('/update_info', adminController.update);
router.get('/', adminController.info);

module.exports = router;