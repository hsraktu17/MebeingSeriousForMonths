const express = require('express')
const app = express()
const PORT = 3002


function summer(n) {
  let summ = 0;
  for(let i = 0; i < n; i++){
    summ += i;
  }
  return summ;
}

app.get('/',(req,res)=>{
  const n = req.query.n;
  const ans = summer(n)
  res.send(`the summ is ${ans}`)
})

app.listen(PORT, ()=>{
  console.log(`Sever started at ${PORT}`)
})
