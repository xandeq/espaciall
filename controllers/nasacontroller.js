const Apod = require("../models/apod");
const { apodSchema } = require("../models/apod");
const https = require("https");
const mongoose = require("mongoose");

exports.getApods = (req, res) => {
  const apods = Apod.find()
    .select("copyrights explanation url")
    .then((apods) => {
      res.json({ apods });
    })
    .catch((err) => console.log(err));
};

exports.createApod = (req, res) => {

  var data = dataAleatoria();

  const url =
    "https://api.nasa.gov/planetary/apod?api_key=BzCHxf3K4h1enx5cUDETYFuGaexAd9NaOib69ZKy&start_date=" + data[0] + "&end_date" + data[1];

    console.log(url);

  https
    .get(url, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        const apod = new Apod(JSON.parse(data));
<<<<<<< HEAD
        //console.log(JSON.parse(data).url);
        console.log(apod);
        console

        // mongoose.model("Apod").findOne({ url: JSON.parse(data).url },
        //   function (err, result) {
        //     if (!result) {
        //       console.log("Não existe.");
        //       apod.save().then((result) =>
        //         res.status(200).json({
        //           apod: result,
        //         })
        //       );
        //     } else {
        //       res.send({ message: "Já existe essa imagem no banco de dados." });
        //     }
        //     if (err) console.log("Erro: " + err);
        //   });
=======
        console.log(JSON.parse(data).url);

        var apodModel = mongoose.model("Apod", apodSchema)

        apodModel.findOne({ url: JSON.parse(data).url },
          function (err, result) {
            if (!result) {
              console.log("Não existe.");    
              apod.save().then((result) =>
                res.status(200).json({
                  apod: result,
                })
              );
            } else {
              res.send({ message: "Já existe." });
            }
            if (err) console.log("Erro " + err);
          });
>>>>>>> fc86f6aa3e71a1e106b94ab7382912cc0526c7a0
      });
    })
    .on("error", (err) => {
      console.log("Error " + err.message);
    });
};


function dataAleatoria(){
  var datas = [];

  var hoje = new Date();
  //var ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth()+1, 0)

  var mes = Math.floor(Math.random()*06)+1;
  var dia = Math.floor(Math.random()*26)+1;
  var ano = 2020;

  var datainicio = new Date(ano, mes, dia);
  var datafim = new Date();
  console.log(datafim)
  datafim = datainicio.setDate(datainicio.getDate() + 10);
  console.log(datafim)

  // console.log(datainicio)
  // console.log(datafim)
  
  // var dataInicioFormatada =  datainicio.getFullYear() + '-' + datainicio.getMonth() + '-' + (datainicio.getDate().padStart(2,'0'))
  // console.log(dataInicioFormatada)
  // var dataFimFormatada = datafim.getFullYear() + '-' + datafim.getMonth() + '-' + datafim.getDate()
  // console.log(dataFimFormatada)

  datas = [datainicio, datafim];
  
  return datas;
}

Date.prototype.addDays = function(days){
  var date = new Date(this.valueOf)
}