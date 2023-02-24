const express = require('express');
const router = express.Router();
const dbConnection = require('../modules/user/user.database');

/* View tasks */
router.get('/view', async(req,res)=>{
    try{
        const data = await dbConnection.view();
        console.log(data);
        res.send(data);
    }
    catch(e){
        console.log(e);
    }
});

module.exports = router