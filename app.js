const express = require('express');
const home = require('./routers/homeRouter');
const add = require('./routers/addRouter');
const view = require('./routers/viewRouter');
const {port} = require('./envconfig/config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

/*Home Page  */
app.use(home);

/*Adding Tasks to the Database */
app.use(add);

/*View Tasks from Databse */
app.use(view);

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})