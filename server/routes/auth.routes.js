const router = require('express').Router();
const authController = require('../controllers/authController.controller');
const validator = require('../functions/validators');

router.post('/register', validator.validate('regCus'),authController.post_customerRegistration);//customer registration 
router.post('/login', validator.validate('cusLogin'),authController.post_customerLogin);//customer login
router.get('/profile/:id', authController.get_customerData);//customer profile data
router.post('/profile/update/:id', validator.validate('cusProfUpdate'),authController.post_updateCustomerData);//update customer profile data
router.post('/profile/reset-password/:id', validator.validate('cusPasRes'),authController.post_resetCustomerPassword);//update customer profile data
router.get('/profile/logout', authController.post_customerLogout);//customer logout

module.exports = router;