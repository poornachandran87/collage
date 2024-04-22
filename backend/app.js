const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleWare = require('./middlewares/error');
const auth = require('./routes/auth')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


app.use('/api/v1',auth);
app.use(errorMiddleWare)
module.exports = app;