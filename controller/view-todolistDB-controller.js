const ToDoList = require('../modules/user/user.database');
/**
 * View tasks from To Do List database
 * @param {object} req view request 
 * @param {object} res sends tasks to the user
 */
module.exports  = async function (req,res){
    try{
        const tasks =  await ToDoList.view();
        console.log(tasks); 
        res.send(tasks); 
    }
    catch(e){
        console.log(`Error: Error Occured in View To do list controller module \n ${e.message}`); 
    }
};