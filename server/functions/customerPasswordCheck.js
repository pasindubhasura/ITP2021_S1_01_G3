const Customer = require('../models/customer.model');
const bcrypt = require('bcrypt');

module.exports.customerPasswordCheck = (password,email) => {
    const doc = Customer.findOne({email});
    const same = bcrypt.compare(password, doc.password);
    return same;
}