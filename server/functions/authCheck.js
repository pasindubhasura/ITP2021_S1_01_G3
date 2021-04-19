const jwt = require('jsonwebtoken');

module.exports.authCheck = (req,res,next) => {

    if(!req.cookies.token){
        res.status(400).json({"error": "You have to log in"});
    }
    else{
        try{
            const decodedToken = jwt.verify(req.cookies.token, 'user@token');
            req.customerID = decodedToken.id;
            // res.json({"id":decodedToken.id});
            next();

        }catch (error) {
            console.log(error);
            res.status(400).json({"error": "You have to log in"});
        }
    }
}                                                       