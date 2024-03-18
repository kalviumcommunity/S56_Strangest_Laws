// const { version } = require("joi");
const mongoose = require("mongoose");

const LawsSchema = mongoose.Schema({
  law: String,
  description: String,
  category: String,
  year: String,
  country: String,
  createdBy: String,
},{versionKey: false});;

const UserSchema = mongoose.Schema({
  userName: String,
},{versionKey: false});

const User = mongoose.model("user", UserSchema);
const Laws = mongoose.model("lawscoll", LawsSchema);

module.exports = { Laws, User };
