import mongoose from 'mongoose'



const Connection=async(username,password)=>{

  const URL=`mongodb://${username}:${password}@ac-tay7apc-shard-00-00.47xyb8y.mongodb.net:27017,ac-tay7apc-shard-00-01.47xyb8y.mongodb.net:27017,ac-tay7apc-shard-00-02.47xyb8y.mongodb.net:27017/?ssl=true&replicaSet=atlas-93m5pu-shard-0&authSource=admin&retryWrites=true&w=majority`;
  
  try{

    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Database connected succesfully");

  }catch(error){
    console.log("Error while connecting to databse: ",error);
  }
}

export default Connection;