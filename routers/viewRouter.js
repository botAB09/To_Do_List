const express = require('express');
const router = express.Router();
const dbConnection = require('../modules/user/user.database');

/* View tasks */
router.get('/view', (req,res)=>{
    dbConnection.view().then((data)=>{
        console.log(data);
        res.send(data);
    })
});

module.exports = router