import express from 'express';
import Connection from './database/db.js';
import defaultData from './default.js';

const app=express();


const PORT=8000;

// connects backend to db
Connection();
// starts the backend server
app.listen(PORT,()=>console.log(`Server is running successfully at port ${PORT}`));
// sends default data to db
defaultData();