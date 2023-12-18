const express = require('express')

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

app.listen(3000,()=>{
  console.log("Server started!!")
})
