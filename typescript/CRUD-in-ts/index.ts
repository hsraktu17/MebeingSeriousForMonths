import express, { Request, Response} from "express";
import mongoose from "mongoose";
import z from "zod";

const app = express()

const Port = 3000

app.get('/',(req : Request, res : Response) => {
    res.send("hello")
})

app.listen(Port, ()=>{
    console.log("sever started")
})