const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const routerdata = require('./routes/operation')

const app = express();

const PORT = 9000;
const database = "mongodb://localhost:27017/Durga"
mongoose.connect(database,()=>{
    console.log(`mongodb is connected || database is connected`)
},error=>console.log(error))

//middleware
app.use(bodyparser.json())
app.use(cors())


app.use('/curd',routerdata)

app.listen(PORT,()=>{
    console.log(`server is listening to port${PORT}`)
})
