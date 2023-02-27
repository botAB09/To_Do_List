const express = require('express');
const app = express();
const routes = require('./routers/routes');
const {port} = require('./envconfig/config');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/*Home Page  */
app.use(routes);

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})