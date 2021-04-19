const { body } = require('express-validator')

exports.validate = (method) => {
  switch (method) {
    case 'addUser': {
     return [ 
        body('fname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("First name should have 2-20 characters"),
        body('lname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("Last name should have 2-30 characters"),
        body('email')
        .trim()
        .isEmail()
        .withMessage("Enter a valid email address"),
        body('address')
        .trim()
        .isLength({max:100,min:5})
        .withMessage("Address should have 5-100 characters"),
        body('pNo')
        .trim()
        .isMobilePhone()
        .withMessage("Enter a valid phone number")
        .isLength({min:10, max:10}).not()
        .withMessage("Phone numbers should have 10 numbers"),
        body('password')
        .trim()
        .isLength({max:12,min:6})
        .withMessage("Password should have 6-12 characters"),
       ] 
    }
    case 'editUser': {
      return [ 
        body('fname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("First name should have 2-20 characters"),
        body('lname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("Last name should have 2-30 characters"),
        body('email')
        .trim()
        .isEmail()
        .withMessage("Enter a valid email address"),
        body('address')
        .trim()
        .isLength({max:100,min:5})
        .withMessage("Address should have 5-100 characters"),
        body('pNo')
        .trim()
        .isMobilePhone()
        .withMessage("Enter a valid phone number")
        .isLength({min:10, max:10}).not()
        .withMessage("Phone numbers should have 10 numbers"),
        body('password')
        .trim()
        .isLength({max:12,min:6})
        .withMessage("Password should have 6-12 characters"),
       ] 
    }
    case 'regCus': {
      return [ 
        body('fname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("First name should have 2-20 characters"),
        body('lname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("Last name should have 2-30 characters"),
        body('email')
        .trim()
        .isEmail()
        .withMessage("Enter a valid email address"),
        body('address')
        .trim()
        .isLength({max:100,min:5})
        .withMessage("Address should have 5-100 characters"),
        body('pNo')
        .trim()
        .isMobilePhone()
        .withMessage("Enter a valid phone number")
        .isLength({min:10, max:10}).not()
        .withMessage("Phone numbers should have 10 numbers"),
        body('password')
        .trim()
        .isLength({max:12,min:6})
        .withMessage("Password should have 6-12 characters"),
       ] 
    }
    case 'cusLogin':{
      return[
        body('email')
        .trim()
        .isEmail()
        .withMessage("Enter a valid email address"),
        body('password')
        .trim()
        .isLength({max:12,min:6})
        .withMessage("Password should have 6-12 characters"),
      ]
    }
    case 'cusProfUpdate': {
      return [ 
        body('fname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("First name should have 2-20 characters"),
        body('lname')
        .trim()
        .isLength({max:20,min:2})
        .withMessage("Last name should have 2-30 characters"),
        body('address')
        .trim()
        .isLength({max:100,min:5})
        .withMessage("Address should have 5-100 characters"),
        body('pNo')
        .trim()
        .isMobilePhone()
        .withMessage("Enter a valid phone number")
        .isLength({min:10, max:10}).not()
        .withMessage("Phone numbers should have 10 numbers"),
       ] 
    }
    case 'cusPasRes':{
      return [
        body('password')
        .trim()
        .isLength({max:12,min:6})
        .withMessage("Password should have 6-12 characters"),
        body('repassword')
        .trim()
        .isLength({max:12,min:6})
        .withMessage("Password should have 6-12 characters"),
      ]
    }
  }
}