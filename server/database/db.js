import mongoose from 'mongoose'



const Connection=async()=>{
  const URL='';
  try{

    mongoose.connect(URL,{useNewUrlParser:true});

  }catch(error){
    console.log("Error while connecting to databse: ",error);
  }
}