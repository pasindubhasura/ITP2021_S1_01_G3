const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const branchSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;