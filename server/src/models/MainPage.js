//Modely pro mongoose

const { model, Schema } = require("mongoose");

const mainPageSchema = new Schema({
    title: String,
    subtitle: String,
    lastChange: String,
});

module.exports = model("MainPage", mainPageSchema);