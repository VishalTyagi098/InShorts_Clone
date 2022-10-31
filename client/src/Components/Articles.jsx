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
    <div>
      {
        news.map(data=>(
          <ArticleCard/>
        ))
      }
    </div>
  )
}

export default Articles