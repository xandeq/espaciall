const Apod = require('../models/apod')

exports.getApods = (req, res) => {

    const apods = Apod.find().select("explanation")
    .then(apods => {
        res.json({apods})
    })
}

exports.createApod = (req, res) => {
    const url = "https://api.nasa.gov/planetary/apod?api_key=BzCHxf3K4h1enx5cUDETYFuGaexAd9NaOib69ZKy";

    const apod = new Apod(req.body);

    apod.save()
    .then(result => res.status(200).json({
        apod: result
    }))
}