import express, { Request, Response} from "express";
import mongoose from "mongoose";
import z from "zod";

const app = express()

const Port = 3000

interface User {
    name : string,
    email :  string,
    password : string,
    DOB : number,
    gender : "male" | "female"
}

app.use(express.json())

mongoose.connect("mongodb+srv://admin:015uk6K28qGd7xik@cluster0.1imslpk.mongodb.net/userValidationInTS")


const userSchema = new mongoose.Schema<User>({
    name : { type : String , required : true },
    email : { type : String , required :  true},
    password : { type : String , required : true},
    DOB : { type : Number , required : true},
    gender : { type : String , enum : ["male", "female"] ,required :  true}
})

const User = mongoose.model<User>('User', userSchema)

app.get('/',(req : Request, res : Response) => {
    res.send("hello")
})

//Create User
app.post('/signup',async (req : Request, res : Response) => {
    const { name, email, password, DOB, gender } = req.body;
    const userExist = await User.findOne({ email : email });
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

//Read User
app.get('/user',async (req : Request, res : Response) => {
    const ALL_USER = await User.find()
    res.json({ALL_USER})
})

//Read particular user
app.get('/user/:email', async (req : Request, res : Response) => {
    const getEmail = req.params.email;
    const checkUser = await User.findOne({ email : getEmail })
    if(checkUser){
        res.json(checkUser)
    }else{
        res.send("User does not exist");
    }
})

//Update user
app.put('/updateUser/:emailid', async (req : Request, res : Response) => {
    const emails = req.params.emailid
    const { name, email, password, DOB, gender } = req.body;

    try{
        const userToBeUpdated = await User.findOne({ email : emails })

        if(!userToBeUpdated) {
            return res.status(404).send("User not found");
        }

        if(name) userToBeUpdated.name = name;
        if(email) userToBeUpdated.email = email;
        if(password) userToBeUpdated.password = password;
        if(DOB) userToBeUpdated.DOB = DOB;
        if(gender) userToBeUpdated.gender = gender;

        await userToBeUpdated.save();
        res.send("User updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

app.delete('/deleteUser/:emailid', async (req : Request, res : Response) => {
    const userEmail = req.params.emailid;
    try {
        const userToBeDeleted = await User.findOneAndDelete({ email: userEmail });

        if (!userToBeDeleted) {
            return res.status(404).send("User not found");
        }

        res.send("User deleted successfully");
    } catch (error) {
        console.error(error);

        
        if (error instanceof mongoose.Error.CastError) {

            return res.status(400).send("Invalid email format");
        }


        res.status(500).send("Internal Server Error");
    }
});

app.listen(Port, ()=>{
    console.log("sever started")
})