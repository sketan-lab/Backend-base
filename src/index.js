import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import express from 'express'
dotenv.config({
    path:'./env'
})

const app=express();

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("server running");
    })
}).catch((err)=>{
    console.log("Sql Connection failed");
})