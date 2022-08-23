//Modely pro mongoose

const { model, Schema } = require("mongoose");

const mainDataSchema = new Schema({
    title: String,
    subtitle: String,
    lastChange: String,
});

module.exports = model("MainData", mainDataSchema);