const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'mydb';
const dbConn = require('./db');

app.use(bodyParser.urlencoded({ extended: true })) //use to parse the form data into key-value pairs.
app.listen(8080,()=>{
    console.log('Starting on port 8080');
});
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/static/index.html");
});
app.post("/add",(req,res)=>{
    res.status(204).send(); //this is used to send No Content Request to stop re-loading the form
    dbConn.add(req.body).then((data)=>{
        console.log(data);
    })
});
app.get("/view",(req,res)=>{
   dbConn.view().then((data)=>{
    console.log(data);
    res.send(data);
   })
});