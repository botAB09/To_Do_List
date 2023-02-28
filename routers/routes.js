const express = require('express');
const router = express.Router();
const home = require('../controller/home-controller.js');
const InsertIntoDb = require('../controller/add-todolistDB-controller');
const ViewDbData = require('../controller/view-todolistDB-controller')
/* home page */
router.get('/',home)
/* adding tasks */
router.post('/add',InsertIntoDb);
/* View tasks */
router.get('/view',ViewDbData);

module.exports = router