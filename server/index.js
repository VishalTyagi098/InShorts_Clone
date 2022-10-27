import express from 'express';
import Connection from './database/db.js';
import defaultData from './default.js';

const app=express();


const PORT=8000;

Connection();
app.listen(PORT,()=>console.log(`Server is running successfully at port ${PORT}`));
defaultData();