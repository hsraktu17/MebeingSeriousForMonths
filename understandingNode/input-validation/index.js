const z = require('zod')
const express = require('express')
const app = express()

const fs = require('fs')
const { CallTracker } = require('assert')

const schema = z.object({
  // userId : z.number(),
  name : z.string(),
  email : z.string().email(),
  password : z.string().min(8)
})

//promisify

app.use(express.json())
let ALL_USER;

app.get('/userData',async (req,res)=>{
  ALL_USER = await loadUserData();
  res.json({ALL_USER})
})

app.get('/noOfUsers',async (req,res)=>{
  ALL_USER = await loadUserData() 
  res.json({noOfUser : ALL_USER.length})
})

const userDataFilePath = 'user.json'

async function saveUserData(){
  await  fs.promises.writeFile(userDataFilePath, JSON.stringify(ALL_USER, null, 2), 'utf-8')
}

async function loadUserData(){
  try{
    const data = await  fs.promises.readFile(userDataFilePath, 'utf-8')
    return JSON.parse(data)
  }
  catch(err){
    return []
  }
}

app.post('/addUser',async(req,res)=>{
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const obj = {name, email, password}

  const response = schema.safeParse(obj);

  if(response.success){
    ALL_USER = await loadUserData()
    ALL_USER.push(obj)
    await saveUserData();
  }else{
    res.send("invalid input")
  }

  res.json({ALL_USER})

})

app.listen(3000,()=>console.log("server started at 3000"))