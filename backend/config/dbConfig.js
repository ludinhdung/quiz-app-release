const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dinhdung:dung2309@cluster0.phxrd0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connectionDb = mongoose.connection

connectionDb.on('error',(error)=>{
    console.log(error);
})

connectionDb.on('connected',()=>{
    console.log("Connected to Database successfully.")
})

module.exports = connectionDb