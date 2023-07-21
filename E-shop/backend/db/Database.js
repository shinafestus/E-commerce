const mongoose = require("mongoose");

const connectionDatabase = () => {
  mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  }).then((data) =>{
    console.log(`mongoDb connected with server:${data.connection.host}`);
  })
}

module.exports = connectionDatabase;