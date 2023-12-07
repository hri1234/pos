const db = require('../../models/PurchaseModel/AddpurchaseModel');

const GetALLdata = async (req, resp) => {
    try {
        const result = await db.find()
        resp.status(200).send(result)
    } catch (error) {
        resp.status(404).json(message.error)

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
const Postdata = async (req, resp) => {
    const {
        Dinning,
        Email,
        Phone,
        Address
    } = req.body;

    const findUserd = [
        { Email },
        { Phone }

    ];

    for (const findUserdItem of findUserd) {
        const foundUser = await db.findOne(findUserdItem);
        if (foundUser) {
            return resp.json({ [Object.keys(findUserdItem)[0]]: true });
        }
    }
    const newUser = await db.create({
        Dinning,
        Email,  
        Phone,
        Address
    });

    resp.status(201).json(newUser)
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
