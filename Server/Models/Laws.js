const mongoose = require("mongoose")

const LawsSchema = mongoose.Schema({
    law: String,
    description: String,
    category: String,
    year: String,
    country: String,
})

const UserSchema = mongoose.Schema({
    userName: String,
})

const Laws = mongoose.model("lawcoll", LawsSchema)
const User = mongoose.model("user", UserSchema)
module.exports = { Laws, User }
