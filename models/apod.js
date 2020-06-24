const mongoose = require('mongoose')

const apodSchema = new mongoose.Schema({
    date: {type: String},
    explanation: {type: String},
    imagesource: {type: String},
    url: {type:String},
    hdurl: {type: String},
    media_type: {type:String},
    copyright: {type: String}
})

module.exports = mongoose.model("Apod", apodSchema)