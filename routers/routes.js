const express = require('express');
const router = express.Router();
const home = require('../controller/home-controller.js');
const InsertIntoDb = require('../controller/add-todolistDB-controller');
const ViewDbData = require('../controller/view-todolistDB-controller');

/**
 * Home page router
 */
router.get('/',home)
/**
 * Inserting task router
 */
router.post('/add',InsertIntoDb);
/**
 * View tasks router
 */
router.get('/view',ViewDbData);

module.exports = router