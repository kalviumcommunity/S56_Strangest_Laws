const mongoose = require("mongoose")

const LawsSchema = mongoose.Schema({
    law: String,
    description: String,
    category: String,
    year: String,
    country: String,
})

const Laws = mongoose.model("lawcoll", LawsSchema)
module.exports = Laws
