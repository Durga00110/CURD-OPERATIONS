const mongoose = require('mongoose');

const mongooseScheema = new mongoose.Schema({
name: {
     type : String,
     require: true
      },
      job: {
        type : String,
        require: true
         },
         language: {
            type : String,
            require: true
             },
})

module.exports = mongoose.model("Durga",mongooseScheema,"curdOperations")

