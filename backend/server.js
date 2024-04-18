
const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const setConnection = require('./config/database');

setConnection()
dotenv.config({path:path.join(__dirname,'config','config.env')});

const server = app.listen(process.env.PORT,() =>{
    console.log(`server listening in the port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})