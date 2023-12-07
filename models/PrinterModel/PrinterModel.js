const mongoose = require("mongoose");

const department = mongoose.Schema({

    ipaddress: {
        type: String,
        required: true,
    },
    port:
    {
        type: String,
        required: true,
    },
    type:
    {
        type: String,
        required: true,
    },
    content:
    {
        type: String,
        required: true,
    }
},  { timestamps: true } )
module.exports = mongoose.model("printer", department);