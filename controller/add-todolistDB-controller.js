const ToDoList = require('../modules/user/user.database');

/**
 * Insert task entered by user into To Do List database
 * @param {*} req req.body contains task entered by the user     
 * @param {*} res sends response status to the web page
 */
module.exports = async function (req,res){
    try{
        if(!req.body || req.body.task == ''){
            res.sendStatus(204);
            throw new Error("Cannot enter NULL or Empty data into the Database");
        }
        res.sendStatus(204);
        const task = await ToDoList.add(req.body);
        console.log(task); 
    }
    catch(e){
        console.log(e); 
    }
};


