const express = require('express')
const fs = require('fs')
const app = express()

app.get('/',(req,res) =>{
  res.send("heeeelo!!")
})

app.get('/aboutme',(req,res) =>{
  res.end("Hi, there My name is Utkarsh")
})

app.get('/contactme',(req,res)=>{
  res.json({
    contactnumber : 8853989997,
    email : "utkarsh172002srivastava@gmail.com"
  })
})

app.get('/whatuwant',(req,res)=>{
  fs.readFile('a.txt','utf-8',(err,data)=>{
    if(data){
      res.status(200)
      res.end(data)
    }
  })
})

app.listen(3000,()=>{
  console.log("Server started!!")
})
