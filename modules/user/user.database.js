const MongoUtil = require('../utility/mongo.util');

/* ToDoList class for add and view method : to add data into the database and view data from the database */
class ToDoList {
  async add (data){
    try{
      await MongoUtil.init();
      const collection = MongoUtil.collection ;
      await collection.insertOne(data);
      return "Inserted one document";
    }
    finally{
      MongoUtil.client.close();
    }
  }
  async view (){
    try{
      await MongoUtil.init();
      const collection = MongoUtil.collection ;
      const data= await collection.find({},{_id:false}).toArray();
      return (data);
    }
    finally{
      MongoUtil.client.close();
    }
  }
};

module.exports = new ToDoList();