const Branch = require("../models/Branch");
const con = require('../db');

module.exports.post_addBranch = (req,res) =>{
    const name = req.body.name;
    const address = req.body.address;
    const telephone = Number(req.body.telephone);
    const email = req.body.email;

    const newBranch = new Branch({
        name,
        address,
        telephone,
        email
    })

    newBranch.save().then(() => {
        res.json("Branch Added")
    }).catch((error) => {
        console.log(error);
    })
}// add branch

module.exports.get_allBranch = (req,res) =>{
    Branch.find().then((branches) =>{
        res.json(branches)
    }).catch((error) => {
        console.log(error);
    })
}//get all branches

module.exports.put_updateBranch = async(req,res) =>{
    let branchId = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const telephone = Number(req.body.telephone);
    const email = req.body.email;

    const updateBranch = {
        name,
        address,
        telephone,
        email
    }

    const update = await Branch.findByIdAndUpdate(branchId, updateBranch).then(() =>{
        res.status(200).send({status:"Branch Updated"})
    }).catch((error) => {
        console.log(error);
        res.status(500).send({status:"Error with updating data!"});
    }) 
}//update branch

module.exports.delete_Branch = async(req,res) =>{
    let branchId = req.params.id;

    await Branch.findByIdAndDelete(branchId).then(() => {
        res.status(200).send({status:"Branch deleted"});
    }).catch((error) => {
        console.log(error);
        res.status(500).send({status:"Error with deleting branch!"});
    })
}//delete branch

module.exports.get_oneBranch = async(req,res) =>{
    let branchId = req.params.id;

    const onebranch = await Branch.findById(branchId).then((branch) => {
        res.status(200).send({status:"Branch fetched", branch})
    }).catch(() => {
        console.log(err);
        res.status(500).send({status:"Error with get branch!"});
    })
}//get one branch