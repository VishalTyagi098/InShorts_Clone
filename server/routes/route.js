import express from 'express';
import { getNews } from '../controllers/news-controller.js';

const Route=express.Router();

Route.get('/news',getNews);

export default Route