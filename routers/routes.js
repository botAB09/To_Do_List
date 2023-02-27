const express = require('express');
const router = express.Router();
const home = require('../controller/home-controller.js');
const ToDoListDatabase = require('../controller/todolistDB-controller');

/* home page */
router.get('/',home)
/* adding tasks */
router.post('/add',ToDoListDatabase.InsertIntoDb);
/* View tasks */
router.get('/view',ToDoListDatabase.ViewDbData);

module.exports = router