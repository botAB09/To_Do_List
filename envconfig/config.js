const dotenv=require('dotenv');
dotenv.config();

/* Development Environment Configuration */
/* change name of urL */

module.exports={
    port: process.env.PORT,
    url:process.env.URL,
    dbname:process.env.DBNAME
};