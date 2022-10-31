import express from 'express';
import Connection from './database/db.js';
import defaultData from './default.js';
import Route from './routes/Route.js';
import cors from 'cors'
import dotenv from 'dotenv'

const app=express();
// .env work
dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

app.use(cors())
// 4. calling routes
app.use('/',Route);

const PORT=8000;

// 1. connects backend to db
Connection(username,password);
// 2. starts the backend server
app.listen(PORT,()=>console.log(`Server is running successfully at port ${PORT}`));
// 3. sends default data to db
defaultData();