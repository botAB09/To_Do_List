const path = require('path');

/**
 * Home Page 
 * @param {object} req home page request 
 * @param {object} res sends error status to the webpage
 */
module.exports = async function(req,res){ 
    res.sendFile(path.join(__dirname,'..','public','index.html'),function(err){
        if(err){
            console.log("Home Page Not Found !");
            res.status(err.status).end();
        }
    });
}