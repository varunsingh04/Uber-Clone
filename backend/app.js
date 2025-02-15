const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectToDb = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js');


connectToDb();

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',function(req,res){
    res.send("Testing te setup")
})

app.use('/user',userRoutes);


module .exports = app;
