//rename this file 
const bodyParser = require('body-parser'),
express = require('express'),
app = express(),
dbConnection = require('./database_functions'),
{port}=require('./config');

//make classes here .
//class comments ----

//function comments ----

//make env files 
//dont hard code port numbers 
app.use(bodyParser.urlencoded({ extended: true })) //use to parse the form data into key-value pairs.
app.listen(port,()=>{
    console.log(`Starting on port ${port}`); //make it dynamic, dont hard code 
});
//how to create routing in nodejs. 
//read the affects of each method 

//read about axios 
//axios and request,promise (rp)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/static/index.html");
});
//choose appropriate nomenclature for routes
app.post("/add",(req,res)=>{
    res.status(204).send(); //this is used to send No Content Request to stop re-loading the form
    dbConnection.add(req.body).then((data)=>{
        console.log(data); //__id **** 
    })
});

//read and debug about req, response ****
app.get("/view",(req,res)=>{
   dbConnection.view().then((data)=>{
    console.log(data);
    res.send(data);
   })
});