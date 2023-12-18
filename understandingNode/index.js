const express = require('express')

const app = express()

app.get('/',(req,res) =>{
  res.send("heeeelo!!")
})

app.listen(3000,()=>{
  console.log("Server started!!")
})
