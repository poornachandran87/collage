const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleWare = require('./middlewares/error');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const check = (req,res) =>{
    res.json({
        success:true,
        message:'check'
    })
}
app.use('/api/v1',check);
app.use(errorMiddleWare)
module.exports = app;