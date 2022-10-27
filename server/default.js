import {data} from './constants/data.js';
import News from './models/news-schema.js'

const defaultData=async()=>{

  try{
    await News.insertMany(data);
    console.log("Default data imported succesfully");
    
  }catch(error){
    console.log("error while sending default data: ",error);
  }
}

export default defaultData;