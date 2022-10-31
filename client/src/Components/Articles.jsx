import React from 'react'
import {useEffect} from 'react';
import {Box} from '@mui/material';

import { getNews } from '../service/api.js';

function Articles() {

  useEffect(()=>{
    dailyNews();
  },[]);

  const dailyNews=async()=>{
    let response = await getNews();
  }

  return (
    <div>
      
    </div>
  )
}

export default Articles