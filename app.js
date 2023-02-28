const express = require('express');
const app = express();
const routes = require('./routers/routes');
const {port} = require('./envconfig/config');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/* calls the routes.js file for route handling */
app.use(routes);

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})