const MongoUtil = require('../utility/mongo.util');

/**
 * To Do List Class 
 */
class ToDoList {
  /**
   * Add function to insert task into database
   * @param {string} task task to be inserted into To Do List database
   *  
   */
  async add (task){
    try{
      const collection = MongoUtil.collection ;
      await collection.insertOne(task);
      return "Inserted one document";
    }
    catch(err){
      throw new Error(`Error occured at Add module in user.database \n ${err}`);
    }
  }
  /**
   * View Function to view task from the database
   * @returns {string} task from the To Do List database
   */
  async view (){
    try{
      const collection = MongoUtil.collection ;
      const tasks= await collection.find({}, {projection:{_id:0}}).toArray();
      return (tasks);
    }
    catch(err){
      throw new Error(`Error occured at View module in user.database \n ${err}`);
    }
  }
};

module.exports = new ToDoList();