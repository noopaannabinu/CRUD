import mongoose from "mongoose"
const connectToMongo = `mongodb://127.0.0.1:27017/crud`; //change this to connect locally to mongodb

try{
  const db = await mongoose.connect(connectToMongo, {
    serverSelectionTimeoutMS: 5000,
  });
  console.log(`\ndatabase connected\n{ host:${db.connection.host} port:${db.connection.port} database:${db.connection.name} }\n`)
}catch(e){
  console.log("database failure")
  console.log(e.reason.error.cause)
}
    
//export default connectToMongo;