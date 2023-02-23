//rename file 
const { MongoClient } = require('mongodb');
const {url,dbname}=require('./config')
//run time env

//client certi and username , pass 
const client = new MongoClient(url);
//env file ****
// Database Name
//dont hardcode***

//add firstdb to constructor and why ***
exports.view =async function(){
  try{
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection('firstdb')
    const data= await collection.find({}).toArray();
    return (data);
  }
  finally{
    client.close();
  }
}
exports.add = async function(data){
  try{
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection('firstdb');
    await collection.insertOne(data);
    return "Inserted one document"; //create logs for inserted file ** ( fail or pass and for which user)
  }
  finally{
    client.close();
  }
}