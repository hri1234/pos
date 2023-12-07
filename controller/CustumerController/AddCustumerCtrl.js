const db = require('../../models/custumerModel/AddCustumerModel');

const GetALLdata = async (req, resp) => {
    try {
        const { page, limit } = req.query
        console.log(page,limit);
        const skip = (page - 1) * limit;
     
        const result = await db.find({}).skip(skip).limit(limit)
        const count = result.length;
        resp.status(200).send({ count, result })

    } catch (error) {
        resp.status(404).json(error.message)

    }
}

const Getdata = async (req, resp) => {
    try {

        const result = await db.find({ _id: req.params.id })
        resp.status(200).send(result)

    } catch (error) {
        resp.status(404).json(message.error)
    }
}

const Postdata = async (req, res) => {

    try {
        const newUser = await db.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json(error.message)
    }
};

const Putdata = async (req, resp) => {

    try {
        let result = await db.updateMany(
            { _id: req.params.id },
            {
                $set: req.body
            })
        resp.status(200).send(result)

    } catch (error) {

        resp.status(404).json(message.error)

    }
}

const DeleteData = async (req, resp) => {

    try {
        let result = await db.deleteMany({ _id: req.params.id },
            {
                $set: req.body
            })

        resp.status(200).send(result)


    } catch (error) {

        resp.status(404).json(message.error)

    }
}

module.exports = { GetALLdata, Getdata, Postdata, Putdata, DeleteData };
