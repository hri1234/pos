const db = require('../../models/AddsupplierModel/AddsupplierModel');

const GetALLdata = async (req, res) => {
    try {
        const result = await db.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const Getdata = async (req, res) => {
    try {
        const result = await db.find({ _id: req.params._id })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const Postdata = async (req, res) => {
    const { name, phone, address } = req.body;
    
    const newUser = await db.create({
        phone,
        name,
        address
    });
    res.status(201).json(newUser);
};



const Putdata = async (req, res) => {
    try {
        let result = await db.updateMany(
            { _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const DeleteData = async (req, res) => {
    try {
        let result = await db.deleteMany({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { GetALLdata, Getdata, Postdata, Putdata, DeleteData };
