const ToDoList = require('../modules/user/user.database');

/* InsertInto DB module : passes the add function method to the routes.js */
module.exports = async function (req,res){
    try{
        if(!req.body || req.body.task == ''){
            res.sendStatus(204);
            throw new Error("Cannot enter NULL or Empty data into the Database");
        }
        res.sendStatus(204);
        const data = await ToDoList.add(req.body);
        console.log(data);  /* displaying the inserted data */
    }
    catch(e){
        console.log(e); /* this will handle the error thrown by mongo utility function  */
    }
};


