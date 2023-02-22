const dotenv=require('dotenv');
dotenv.config();

/* Development Environment Configuration */

module.exports={
    port: process.env.PORT,
    url:process.env.URL,
    dbname:process.env.DBNAME
};