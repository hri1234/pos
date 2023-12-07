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

let vendorCounter = 0;

async function getVendorCounter() {
    try {
        const count = await stockTransfer.countDocuments();
        vendorCounter = count;
    } catch (error) {
        console.error("Error retrieving vendor counter:", error.message);
    }
}

getVendorCounter();

function generateVendorID() {
    vendorCounter++;
    const formattedVendorID = `SUP${vendorCounter.toString().padStart(4,'0')}`;
    return formattedVendorID;
}


const Postdata = async (req, resp) => {
    const {

        purcahseInvoiceProduct,
        supplierMemoNo,
        date,
        purchaseNote,
        discount,
        paidAmount
    } = req.body;

    const newUser = await db.create({
        supplierId:generateVendorID(),
        purcahseInvoiceProduct,
        supplierMemoNo,
        date,
        purchaseNote,
        discount,
        paidAmount
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
