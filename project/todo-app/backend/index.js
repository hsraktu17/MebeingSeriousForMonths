const express = require("express")
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const app = express()

const PORT = 3003

app.use(express.json())

app.post('/todo',async function (req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description
    })
})

app.get('/todos', function (req, res){

})

app.put('/completed', function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
    }
})

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))