import React from 'react'
import {useEffect,useState} from 'react';



import { getNews } from '../service/api.js';
import ArticleCard from './ArticleCard.jsx';

function Articles() {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    dailyNews();
  },[]);

  const dailyNews=async()=>{
    let response = await getNews();
    setNews(response.data)
  }

  return (
    <div className='w-full'>
      {
        news.map(data=>(
          <ArticleCard data={data}/>
        ))
      }
    </div>
  )
}

export default Articles