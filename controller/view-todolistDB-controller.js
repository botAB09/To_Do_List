const ToDoList = require('../modules/user/user.database');

/* View DB module : passes the view function method to the routes.js */
module.exports  = async function (req,res){
    try{
        const data = await ToDoList.view(); 
        console.log(data); /* displaying the database data */
        res.send(data); /* sending the data that is inside the database */
    }
    catch(e){
        console.log(e); /* this will handle the error thrown by mongo utility function  */
    }
};