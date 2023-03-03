const ToDoList = require('../modules/user/user.database');

/**
 * Insert task entered by user into To Do List database
 * @param {object} req req.body contains task entered by the user     
 * @param {object} res sends response status to the web page
 */
module.exports = async function (req,res){
    try{
        if(!req.body || req.body.task == ''){
            res.sendStatus(204);
            throw new Error("Error: Error Cannot enter NULL or Empty data into the Database \n");
        }
        res.sendStatus(204);
        const task = await ToDoList.add(req.body);
        console.log(task); 
    }
    catch(e){
        console.log(`Error: Error Occured in Add To do list controller module \n ${e.message}`); 
    }
};


