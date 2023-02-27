const {MongoClient} = require('mongodb');
const {url,dbname}=require('../../envconfig/config')

class MongoUtil {
    constructor (){
        this.client = new MongoClient(url);
    }
    async init() {
        try{
            await this.client.connect();
            console.log(`Connected to the Database ${dbname}`);
            this.db = this.client.db(dbname);
            this.collection = this.db.collection('firstdb');
        }
        catch(err){
            throw err;
        }
    }
};

module.exports = new MongoUtil();