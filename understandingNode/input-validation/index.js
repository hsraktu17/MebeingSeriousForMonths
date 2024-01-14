const z = require('zod')
const express = require('express')
const app = express()

const schema = z.object({
  name : z.string(),
  email : z.string().email(),
  password : z.string().min(8)
})

//User In memory database

app.use(express.json())

const ALL_USER = [
  {
    name:"Utkarsh Raj Srivastava",
    email:"utkars@gmail.com",
    password:"12345566"
  },{
    name:"jbg asbf",
    email:"jbg@gmail.com",
    password:"1234556i777"
  },{
    name:"klsr",
    email:"klsr@gmail.com",
    password:"1222234444444"
  },{
    name:"rahul",
    email:"rahul@hotmail.com",
    password:"0987654321"
  }
]



app.get('/userData',(req,res)=>{
  res.status(203).json({ALL_USER})
})

app.get('/noOfUsers',(req,res)=>{
  res.json({noOfUser : ALL_USER.length})
})


app.post('/addUser',(req,res)=>{
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const obj = {name, email, password}

  const response = schema.safeParse(obj);

  if(response.success){
    ALL_USER.push(obj)
  }else{
    res.send("invalid input")
  }

  

  res.json({ALL_USER})

})

app.listen(3000,()=>console.log("server started at 3000"))