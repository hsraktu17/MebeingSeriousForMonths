const express = require("express")
const app = express()
const mongoose = require('mongoose')
const z = require('zod')

app.use(express.json())

mongoose.connect("mongodb+srv://admin:015uk6K28qGd7xik@cluster0.1imslpk.mongodb.net/uservalidation")

const User = mongoose.model('User',{name : String, email : String, password : String, DOB : Number, gender : String})


//Create user
app.post('/signup', async (req, res) => {
    const { name, email, password, DOB, gender } = req.body;
    const userExist = await User.findOne({email : email})
    if(userExist){
        res.send("User exist in db")
    }else{
        const user = new User({
            name : name,
            email : email,
            password : password,
            DOB : DOB,
            gender : gender
        })
        await user.save()
    }
    res.send("user added sucessfully")
})

//Read user
app.get('/user', async (req, res) =>{
    const ALL_USER = await User.find()
    res.json({ALL_USER})
})

//Read particular user
app.get('/user/:email', async (req, res)=>{
    const getEmail = req.params.email
    const checkUser = await User.findOne({ email : getEmail })
    if(checkUser){
        res.json(checkUser)
    }
    else{
        res.send("User does not exist")
    }
})


//Update user
app.put('/updateUser/:emailID', async (req, res)=>{
    const emailID = req.params.emailID;
    const { name, email, password, DOB, gender } = req.body;

    try{
       const userToUpdate = User.findOne({ email : emailID})
       if(!userToUpdate){
        res.send("user not found")
       }
       if(name) userToUpdate.name = name;
       if(email) userToUpdate.email =  email;
       if(password) userToUpdate.password = password
       if(DOB) userToUpdate.DOB = DOB;
       if(gender) gender = gender;

       await userToUpdate.save()
       res.send("User updated")
    }catch(error){
        console.error(error);
        res.send("internal server error")
    }
})



app.listen(3001, () => {
    console.log("Server Started")
})