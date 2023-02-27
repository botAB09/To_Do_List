const MongoUtil = require('../utility/mongo.util');

class ToDoList {
  async init(){
    await MongoUtil.init();
    this.collection = MongoUtil.collection ;
  }
  async add (data){
    try{
      await this.collection.insertOne(data);
      return "Inserted one document";
    }
    catch(e){
      console.log(e)
    }
  }
  async view (){
    try{
      const data= await this.collection.find({},{_id:false}).toArray();
      return (data);
    }
    catch(err){
      throw err;
    }
  }
};

module.exports = new ToDoList();