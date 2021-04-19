const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerIDSchema = new Schema({
    cus_id:{type: String}
},
{collection : "CusID"}
);

const CusID = mongoose.model('CusID', customerIDSchema);
module.exports = CusID;