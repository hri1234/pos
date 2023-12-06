const mongoose = require("mongoose");

const department = mongoose.Schema({

    Dinning: {
        type: String,
        required: true,
    },
    Email:
    {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
    },
    Address:
    {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model("dinnings", department);
