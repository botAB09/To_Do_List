const express = require('express');
const router = express.Router();
const path = require('path');

/* Home Page */
router.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'..','public','index.html'),function(err){
        if(err){
            console.log("Home Page Not Found !");
            res.status(err.status).end();
        }
        else{
            console.log("Home Page Sent to server");
        }
    });
})
module.exports=router;