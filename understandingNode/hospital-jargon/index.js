const express = require('express')
const app = express()
const fs = require('fs')


const users = [{
  name : 'John',
  kidney : [{
    healthy : false
  },{
      healthy : true
    },{
      healthy :false
    }]

  },
  {
    name : 'doe',
    kidney : [{
      healthy :true
    },{
        healthy :false
      },
      {
        healthy:true
      }

    ]
  }
]



app.get('/',(req,res) =>{
  const username = users[0].name
  const johnkidneys = users[1].kidney;
  const totalkidneys = johnkidneys.length;
  let healthykidneys = 0;
  
  for(let i = 0; i < johnkidneys.length; i++){
    if(johnkidneys[i].healthy){
      healthykidneys += 1;
    }
  }
  const unhealthykidneys = totalkidneys - healthykidneys
  res.json({
    username,
    totalkidneys,
    healthykidneys,
    unhealthykidneys
  })
  
})

app.get('/users',(req,res) =>{
  res.json(users)
})




app.listen(3001,()=>{
  console.log("Server Started !!")
})
