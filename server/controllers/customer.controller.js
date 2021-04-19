const con = require('../db');
const Customer = require('../models/customer.model');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { generateCusID } = require('../functions/cusID');
const { validationResult } = require('express-validator');


module.exports.get_AllCustomers = async(req, res) => {

    try {
        //const cusID = await Customer.findById({_id: res.locals.customer.id});
        const customers = await Customer.find();
    
        res.json({
           // "cusID": cusID.email,
            "customers": customers
        });
        
    } catch (error) {
        res.status(400).json(error);
    }

}//display all cusotomers

module.exports.post_addCustomer = async(req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const pNo = req.body.pNo;
    let hashedPassword = "";
    let cus_id;

    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

      if (!errors.isEmpty()) {
        res.json({ "errors": errors.array() });
        return;
      }

    //
    try {
        const result = await Customer.findOne({email});
        if (result) res.json({"emailerror": "Email is already in use!"}); 
        else{
            //const count = await Customer.countDocuments();
            hashedPassword = await bcrypt.hash(password, 10);
 
                cus_id = await generateCusID.call();
                const newCustomer = new Customer({cus_id,fname,lname,email,hashedPassword,address,pNo});
                await newCustomer.save();

                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'spremadasa334@gmail.com',
                        pass: 'sajith123'
                    }
                });

                const emailHTML = `Hi ${newCustomer.fname} ${newCustomer.lname}😃,<br><br>
                An account has been created for you on our website! Please use this email and password to log in to our website.<br><br>
                Email:- ${newCustomer.email}<br>
                Password:- ${password}<br><br>
                Thank you!<br>
                Thilina Hardware.`;
                const mailOptions = {
                    from: 'spremadasa334@gmail.com',
                    to: `${email}`,
                    subject: 'Welcome to Thilina Hardware!😃',
                    html: emailHTML
                };

                await transporter.sendMail(mailOptions);
                res.json({"success": "Acoount creation is successfull"});
                }
                   
    } catch (errors) {
        res.json(errors);   
    }
} //add customer and send their login credentials for their email

module.exports.get_OneCustomer = async(req, res) => {
    const id = req.params.id;
    
    try{
        const customer = await Customer.findById(id);
        res.json(customer);
        
    }catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
} //display one cusotomers

module.exports.post_editCustomer = async(req, res) => {
    const id = req.params.id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const pNo = req.body.pNo;
    let hashedPassword = "";

    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

      if (!errors.isEmpty()) {
        res.json({ "errors": errors.array() });
        return;
      }

    //
    try {
        hashedPassword = await bcrypt.hash(password, 10);
        const customer = await Customer.findById(id);
        customer.fname = fname;
        customer.lname = lname;
        customer.email = email;
        customer.address = address;
        customer.pNo = pNo;
        customer.hashedPassword = hashedPassword;
        
        await customer.save();   
        
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'spremadasa334@gmail.com',
                pass: 'sajith123'
            }
        });
        
        const emailHTML = `Hi ${customer.fname} ${customer.lname}😃,<br><br>
                    Your account details has been changed! Please use this email and password to log in to our website.<br><br>
                    First Name:- ${customer.fname}<br>
                    Last Name:- ${customer.lname}<br>
                    Email:- ${customer.email}<br>
                    Address:- ${customer.address}<br>
                    Phone No:- ${customer.pNo}<br>
                    Password:- ${password}<br><br>
                    Thank you!<br>
                    Thilina Hardware.`;
        
        const mailOptions = {
            from: 'spremadasa334@gmail.com',
            to: `${email}`,
            subject: 'Your Account details has been changed!🔑',
            html: emailHTML
        };
        await transporter.sendMail(mailOptions);
        res.json({"success": "Acoount update is successfull"});
    } catch (errors) {
        res.json(errors);
    } 
} //edit cusotomers

module.exports.get_deleteCustomer = async(req, res) => {
    const id = req.params.id;
    try {
        await Customer.findByIdAndDelete(id);
        res.json(true);
    } catch (error) {
        res.status(400).json(error)
    }
} //delete cusotomers