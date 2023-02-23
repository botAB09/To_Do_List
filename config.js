const dotenv=require('dotenv');
dotenv.config();
//this object includes environment variables.
module.exports={
    port: process.env.PORT,
    url:process.env.URL,
    dbname:process.env.DBNAME
};