const mongoose = require("mongoose");

const department = mongoose.Schema({

    SL: {
        type: String,
        required: true,
    },
    Product:
    {
        type: String,
        required: true,
    },
    Quantity: {
        type: String,
        required: true,
    },
    UnitPrice:
    {
        type: String,
        required: true,
    },
    SalePrice: {
        type: String,
        required: true,
    },
    Total:
    {
        type: String,
        required: true,
    },
    Supplier: {
        type: String,
        required: true,
    },
    SupplierMemo:
    {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    PurchaseNote:
    {
        type: String,
        required: true,
    },
    SalePrice: {
        type: String,
        required: true,
    },
    Total:
    {
        type: String,
        required: true,
    },
    Supplier: {
        type: String,
        required: true,
    },
    SupplierMemo:
    {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model("addpurcahses", department);
