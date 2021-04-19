const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cus_id:{type: String},
    fname: { type: String},
    lname:{ type: String },
    email:{ type: String},
    address:{ type: String},
    pNo:{ type: Number},
    hashedPassword: {type: String}
},
{collection : "Customers"}
);

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;