const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:015uk6K28qGd7xik@cluster0.1imslpk.mongodb.net/user_app");

const User = mongoose.model('User', { username: String, email: String, password: String });

app.get('/user', async(req,res) =>{
    const ALL_user = await User.find()
    res.json({ALL_user})
})

/*
create 
read
update
delete
*/
app.get('/user/:email', async (req,res)=>{
    const userEmail = req.params.email
    const user = await User.findOne({email : userEmail})
    if(user){
        res.json(user)
    }else{
        res.send("user does not exist")
    }
})

app.post('/signup', async function (req, res) {
    const { username, email, password } = req.body;

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).send("User already exists");
        }

        const user = new User({
            username: username,
            email: email,
            password: password,
        });

        await user.save();
        res.status(201).send("User added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});