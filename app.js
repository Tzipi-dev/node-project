require("dotenv").config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const express = require("express")
const app = express()
app.use(express.json())
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/404.html")
})
app.listen(3000,()=>{
    console.log("port 3000");
})
