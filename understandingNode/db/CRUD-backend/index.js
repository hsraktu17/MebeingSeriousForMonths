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

//Update user
app.put('/updateUser', async (req, res)=>{
    const { name, email, password, DOB, gender } = req.body;
})



app.listen(3000, () => {
    console.log("Server Started")
})