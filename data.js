const url ='mongodb+srv://Joki7777:Roadtotheparadise7@cambridge-cbcac.mongodb.net/cambridge?retryWrites=true&w=majority';
var MongoClient = require('mongodb').MongoClient;
let connection = null;
class MongoConnect {
  constructor (){
    return new Promise(async (resolve, reject) =>  {
      if(connection == null){
        connection = await MongoClient.connect(url, { useNewUrlParser: true, autoReconnect:true })
        resolve(connection)
      } else {
        resolve(connection)
      }
    })
  }
}
module.exports = MongoConnect;