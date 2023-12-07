const mongoose = require("mongoose");

const department = mongoose.Schema({

    purcahseInvoiceProduct:{
        type: [],
        required: true,
    },
    supplierMemoNo: {
        type: String,
        required: true,
    },
    supplierMemoNo:
    {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    purchaseNote:
    {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
    paidAmount:
    {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model("addpurcahses", department);
