const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://ankeshchopde2000:acchopde@cluster0.pcixrpp.mongodb.net/?retryWrites=true&w=majority")


module.exports = { connection }