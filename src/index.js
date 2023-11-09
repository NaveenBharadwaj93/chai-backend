import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import 'dotenv/config'




/*
import express from "express";
const app = express()

;(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on("error",() => {
            console.log("ERR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: " , error);
        throw error
    }
} )() //IIFE

*/