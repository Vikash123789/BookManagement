const express = require("express")
const route = require("./routes/route.js")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://ManojKoli:ManojKoli@cluster0.kwqvp.mongodb.net/VikGolAssignment?authSource=admin&replicaSet=atlas-sncxo8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
{useNewUrlparser:true})
.then(()=>console.log("MongoDb is connected"))
.catch(err =>console.log(err))

app.use('/',route)



app.listen(3000,function(){
    console.log("Express is running on port 3000")

});