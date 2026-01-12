const mongoose = require('mongoose');
 
async function ConnecttoMongoDB(url){
  return mongoose.connect(url);
}

module.exports = {
  ConnecttoMongoDB,
}