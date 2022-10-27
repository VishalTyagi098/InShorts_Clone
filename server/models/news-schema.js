import mongoose from 'mongoose';

// This creates the schema
const newsSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true,
    unique:true
  },
  timestamp:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true
  },
  publisher:{
    type:String,
    required:true
  },
});

// this creates the collection named 'news' by validating the 'newsSchema' 
const news=mongoose.model('news',newsSchema);

export default news;