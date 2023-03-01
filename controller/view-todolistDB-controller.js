const ToDoList = require('../modules/user/user.database');
/**
 * View tasks from To Do List database
 * @param {*} req '/view' request 
 * @param {*} res sends tasks to the user
 */
module.exports  = async function (req,res){
    try{
        const tasks =  await ToDoList.view();
        console.log(tasks); 
        res.send(tasks); 
    }
    catch(e){
        console.log(`Error Occured in View To do list controller module : ${e}`); 
    }
};