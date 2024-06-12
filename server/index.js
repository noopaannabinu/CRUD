import express from 'express';
import mongoose from "mongoose"
import cors from 'cors';
import userRoutes from './routes/users.js'



const app= express();
const PORT=process.env.PORT || 3001;
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
//middleware
app.use(express.json());
//cors
app.use(cors({
  origin:"http://localhost:3000"
}));
app.get("/",(req,res)=>{
    res.send("api is running")
});
//routes
app.use("/api/v1",userRoutes)
app.listen(PORT,()=>{
    console.log(`api is running on http://localhost:${PORT}`);
})