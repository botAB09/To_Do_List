const path = require('path');

/* Home module : send the index.html file to the web-server */
module.exports = async function(req,res){ 
    res.sendFile(path.join(__dirname,'..','public','index.html'),function(err){
        if(err){
            console.log("Home Page Not Found !");
            res.status(err.status).end();
        }
    });
}