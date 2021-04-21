//importing ependecies
const express = require('express');
const cors = require("cors");
const customerRouter = require('./routes/customer.routes');
const authRouter = require('./routes/auth.routes');
const branchRouter = require('./routes/branch.routes');


//creating app
const app = express();

//configuring dotenv 
require('dotenv').config();

//dotenv vairiables
const port = process.env.PORT || 5000;

//dependencies used by the app
app.use(cors({
    origin: [
    'http://localhost:3000'
  ],
  credentials: true
    })
);
app.use(express.json())
const urlEncodedParser = express.urlencoded({ extended: false });
app.listen(port, (error) => {
    if(error) console.log(error);
    console.log('Server listening to PORT '+ port);
});

//customers
app.use('/customers',urlEncodedParser,customerRouter);
app.use('/customer', authRouter);

//branches
app.use("/branch", branchRouter);
