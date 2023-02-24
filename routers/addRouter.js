const express = require('express');
const router = express.Router();
const dbConnection = require('../modules/user/user.database');

/* adding tasks */
router.post('/add', async(req,res)=>{
    res.sendStatus(204);
    try{
        const data = await dbConnection.add(req.body);
        console.log(data);
        
    }
    catch(e){
        console.log(e);
    }
});

module.exports = router