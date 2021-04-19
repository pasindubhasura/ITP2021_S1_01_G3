const mongoose = require('mongoose');

//configuring dotenv 
require('dotenv').config();

//dotenv vairiables
const uri = process.env.MONGO_URL;

const con = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
    console.log('MongoDB connected');})
    .catch((error) => {
    console.log(error);})

module.exports = con;