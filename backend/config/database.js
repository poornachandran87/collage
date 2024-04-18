const mongoose = require('mongoose')

const setConnection = () => {
    
    console.log(process.env.DB_LOCAL_URL);
    mongoose.connect("mongodb://localhost:27017/collage")
    .then(con => {console.log(`MongoDB is connected to the host : ${con.connection.host}`)})
    
   

}

module.exports = setConnection;