import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import route from './routes/routes.js';
import cors from 'cors';

const app=express();
dotenv.config();
const PORT=8000;

app.use(express.json());
connection();
app.use(cors())
app.use('/',route)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

})