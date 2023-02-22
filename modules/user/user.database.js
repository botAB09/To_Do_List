const { MongoClient } = require('mongodb');
const {url,dbname}=require('../../envconfig/config')
const client = new MongoClient(url);

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
    return "Inserted one document";
  }
  finally{
    client.close();
  }
}