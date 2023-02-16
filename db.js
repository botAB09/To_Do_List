const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mydb';

exports.view =async function(){
  try{
    await client.connect();
    const db = client.db(dbName);
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
    const db = client.db(dbName);
    const collection = db.collection('firstdb');
    await collection.insertOne(data);
    return "Inserted one document";
  }
  finally{
    client.close();
  }
}