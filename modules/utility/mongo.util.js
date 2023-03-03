const {MongoClient} = require('mongodb');
const {url,dbname}=require('../../envconfig/config')

/**
 * Mongo Utility class
 */
class MongoUtil {
    /**
     * MongoUtil constructor to create MongoClient 
     */
    constructor (){
        this.client = new MongoClient(url);
    }
    /**
     * Initialize db and collection parameter of To Do List database
     */
    async connect() {
        try{
            await this.client.connect();
            console.log(`Connected to the Database ${dbname} \n`);
            this.db = this.client.db(dbname);
            this.collection = this.db.collection('firstdb');
        }
        catch(err){
            console.log(`Error Occured in MongoUtil module while connecting \n ${err} `);
        }
    }
};
const Mongo = new MongoUtil();
Mongo.connect();

module.exports = Mongo;
