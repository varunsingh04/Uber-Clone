const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express()

app.use(cors());

app.get('/test',function(req,res){
    res.send("Testing te setup")
})


module .exports = app;
