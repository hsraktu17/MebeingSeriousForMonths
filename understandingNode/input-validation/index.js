const express = require('express')
const app = express()
const PORT = 3000
const z = require('zod')
const fs = require('fs')

function loginCheck(req,res){
  const userid = req.headers.userid
  const password = req.headers.password
  if(userid != "Utkarsh" || password != "Pass"){
    res.status(403).json({
      msg : "User input wrong"
    })
  }
  else{
    res.send("Helllllo")
  }
}

app.get('/',loginCheck,(req,res)=>{
  res.send("Hello World!")
})

app.get('/loginCheck',(req,res)=>{
  const userid = req.headers.userid
  const password = req.headers.password
  if(userid != "Utkarsh" || password != "Pass"){
    res.status(403).json({
      msg : "User does not exist"
    })
  }else{
    res.json({
      msg : "Hello, welcome"
    })
  }
})

app.listen(PORT,()=>{
  console.log(`server started at ${PORT}`)
})
