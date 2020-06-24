const Apod = require('../models/apod')
const { model, collection } = require('../models/apod')
const https = require('https')
const mongoose = require('mongoose')

exports.getApods = (req, res) => {

    const apods = Apod.find().select("copyrights explanation url")
    .then(apods => {
        res.json({apods})
    })
    .catch(err => console.log(err))
}

exports.createApod = (req, res) => {
    const url = "https://api.nasa.gov/planetary/apod?api_key=BzCHxf3K4h1enx5cUDETYFuGaexAd9NaOib69ZKy";


    https.get(url, (resp) => {

        let data = ''

        resp.on('data', (chunk) => {
            data += chunk;
          });

        resp.on('end', () => {
            const apod = new Apod(JSON.parse(data))
            console.log(JSON.parse(data).url)

            if(!collection.findOne({'url': JSON.parse(data).url}))
            {
                apod.save()
                .then(result => res.status(200).json({
                    apod: result
                }))
            }
            else {
                res.send({'message': 'Ja existe.'})
            }
        })
    }).on('error', (err) => {
        console.log('Error ' + err.message)
    })
}

