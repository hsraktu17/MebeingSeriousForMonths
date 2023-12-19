const express = require('express')
const app = express()
const fs = require('fs')


app.use(express.json()) // middleware which I dont know what it is.....

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


let totalKidneys = users[0].kidney.length;

//get request is used when user wants the data from the database or from the server
app.get('/',(req,res) =>{
  const username = users[0].name
  const johnkidneys = users[0].kidney;
  // const totalkidneys = johnkidneys.length;
  let healthykidneys = 0;
  
  for(let i = 0; i < johnkidneys.length; i++){
    if(johnkidneys[i].healthy){
      healthykidneys += 1;
    }
  }
  const unhealthykidneys = totalKidneys - healthykidneys
  res.json({
    username,
    totalKidneys,
    healthykidneys,
    unhealthykidneys
  })
  
})


//post request when user wants to post there data in the database
app.post('/',(req,res)=>{

  const isHealthy = req.body.isHealthy;
  users[0].kidney.push({
    healthy : isHealthy,  
  })
  res.json({
    msg : "Done"
  })
})


app.put('/',(req,res) =>{
  for(let i = 0; i < users[0].kidney.length; i++){
    users[0].kidney[i].healthy = true 
  }
  res.json({
    msg : "updated"
  })
})


app.delete('/',(req,res)=>{
//  let totalKidneys = users[0].kidney.length;
  for(let i = 0; i < users[0].kidney.length; i++){
    if(users[0].kidney[i].healthy === false){
      totalKidneys-=1;
    }
  }
  res.json({
    msg : "Deleted the unhealthy oness"
  })
})

app.listen(3001,()=>{
  console.log("Server Started !!")
})
