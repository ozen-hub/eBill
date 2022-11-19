const express = require('express');
const customerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/save', customerController.saveCustomer);
router.put('/update', customerController.updateCustomer);
router.delete('/delete', customerController.deleteCustomer);
router.get('/get', customerController.getCustomer);
router.get('/list', customerController.getAllCustomers); // pagination ==> search =>
router.get('/id-list', customerController.getAllCustomerIds);
module.exports = router;