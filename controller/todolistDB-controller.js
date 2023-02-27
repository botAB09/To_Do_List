const ToDoList = require('../modules/user/user.database');

module.exports.InsertIntoDb = async function add(req,res){
    try{
        res.sendStatus(204);
        await ToDoList.init();
        const data = await ToDoList.add(req.body);
        console.log(data);   
    }
    catch(e){
        console.log(e); /* this will handle the error thrown by mongo utility function  */
    }
};

module.exports.ViewDbData  = async function view(req,res){
    try{
        await ToDoList.init();
        const data = await ToDoList.view();
        console.log(data);
        res.send(data);
    }
    catch(e){
        console.log(e); /* this will handle the error thrown by mongo utility function  */
    }
};



/* I think the error is of response and request */

// class ToDoListDatabase{
//     async init(){
//         await ToDoList.init();
//     }
//     async InsertIntoDb(req,res){
//         try{
//             res.send(204);
//             const InsertedData = await ToDoList.add(req.body);
//             console.log(InsertedData);   
//         }
//         catch(e){
//             console.log(e);
//         }        
//     }
//     async ViewDbData(req,res){
//         try{
//             const DbData = await ToDoList.view();
//             console.log(DbData);
//             // res.send(data);
//             return DbData;
//         }
//         catch(e){
//             console.log(e);
//         }
//     }
// };
// module.exports = new ToDoListDatabase();


