const express = require('express')
const app = express()
const PORT = 3003
const path =  require('path')

const z = require('zod')

app.use(express.json())

app.get('/',(req,res)=>{
  console.log(__dirname)
  res.send("heelp")
})

app.get('/health-checkup',(req,res)=>{
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username
  const password = req.headers.password

  if(username != 'Utkarsh' || password != 'Pass'){
    res.status(403).json({
      msg : "User does not exist"
    })
    return;
  }

  if(kidneyId != 1 && kidneyId != 2){
    res.status(411).json({
      msg : "wrong input"
    })
    return;
  }

  res.send("Your heart is healthy")

})



app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})
