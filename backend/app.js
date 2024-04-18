const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const check = (req,res) =>{
    res.json({
        success:true,
        message:'check'
    })
}
app.use('/api/v1',check);
module.exports = app;