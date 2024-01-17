const express = require("express")
const app = express()
const mongoose = require('mongoose')
const z = require('zod')

app.use(express.json())

const schema = z.object()

const User = mongoose.model('User',{name : String, })

app.listen(3000, () => {
    console.log("Server Started")
})