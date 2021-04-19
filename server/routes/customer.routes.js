const router = require('express').Router();
const customerController = require('../controllers/customer.controller');
const validator = require('../functions/validators');

router.get('/',customerController.get_AllCustomers);//display all customers
router.get('/edit/:id', customerController.get_OneCustomer);//get one customer
router.post('/edit/:id', validator.validate('editUser'),customerController.post_editCustomer);//edit one customer
router.post('/add', validator.validate('addUser'),customerController.post_addCustomer);//add new customer
router.delete('/delete/:id', customerController.get_deleteCustomer);//delete one customer

module.exports = router;