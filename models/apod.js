const mongoose = require('mongoose')

const apodSchema = new mongoose.Schema({
    date: {type: String},
    explanation: {type: String},
    imagesource: {type: String},
    hdurl: {type: String}
})

module.exports = mongoose.model("Apod", apodSchema)