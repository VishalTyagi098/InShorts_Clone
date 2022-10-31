import React from 'react'
import {useEffect,useState} from 'react';
import {Box} from '@mui/material';

import { getNews } from '../service/api.js';

function Articles() {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    dailyNews();
  },[]);

  const dailyNews=async()=>{
    let response = await getNews();
    console.log(response.data)
    setNews(response.data)
  }

  return (
    <div>
      
    </div>
  )
}

export default Articles