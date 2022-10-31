import axios from 'axios'

// This function will go to the localhost:8000/news and GET the data from backend. This function is then imported into the Articles.jsx component to be used

// So, this api.js is used to get different data from different API endpoints in the form of functions. These functions can be used to get data and use them by importing them into seperate components

// So, we require backend to provide this data and we will create different endpoints inside the 'controllers' folder
export const getNews=async()=>{
  // URL of the backend server NOT the frontend server
  const URL='http://localhost:8000';

  try{
    return await axios.get(`${URL}/news`);
  }catch(error){
    console.log("Error while calling getNews api: ",error);
  }
}