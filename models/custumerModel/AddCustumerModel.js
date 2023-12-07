const mongoose = require("mongoose");

const department = mongoose.Schema({

    generalName: {
        type: String,
        required: true,
    },
    generalEmail:
    {
        type: String,
        required: true,
    },
    generalPhone: {
        type: String,
        required: true,
    },
    generalAddress:
    {
        type: String,
        required: true,
    },
    dinningName: {
        type: String,
        required: true,
    },
    dinningEmail:
    {
        type: String,
        required: true,
    },
    dinningPhone: {
        type: String,
        required: true,
    },
    dinningAddress:
    {
        type: String,
        required: true,
    },
    takeAwayName: {
        type: String,
        required: true,
    },
    takeAwayEmail:
    {
        type: String,
        required: true,
    },
    takeAwayPhone: {
        type: String,
        required: true,
    },
    takeAwayAddress:
    {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model("dinnings", department);


// {
//     "generalName":"rfr",
//     "generalEmail":"tgt",
//     "generalPhone":"Fgf",
//     "generalAddress":"bg",
//     "dinningName":"bfg",
//     "dinningEmail":"Fvf",
//     "dinningPhone":"Vfv",
//     "dinningAddress":"DVfdv",
//     "takeAwayName":"fvfv",
//     "takeAwayEmail":"Fvfv",
//     "takeAwayPhone":"65487",
//     "takeAwayAddress":"Frvrv"
// }