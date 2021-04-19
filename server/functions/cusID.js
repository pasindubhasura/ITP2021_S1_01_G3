const con = require('../db');
const CusID = require('../models/cusID.model');

const generateCusID = async() => {
    const post = await CusID.findOne().sort({_id: -1}).exec();
    const latestID = post.cus_id;
    const splitID = latestID.split("_", 2);
    const cus_id = "Cus_" + (parseInt(splitID[1]) + 1);
    await new CusID({cus_id}).save();
    await CusID.deleteOne({cus_id:latestID});
    return cus_id;

}
module.exports.generateCusID = generateCusID;