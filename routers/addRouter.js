const express = require('express');
const router = express.Router();
const dbConnection = require('../modules/user/user.database');

/* adding tasks */
router.post('/add', (req,res)=>{
    res.sendStatus(204);
    dbConnection.add(req.body).then((data)=>{
        console.log(data);  
    })
});

module.exports = router