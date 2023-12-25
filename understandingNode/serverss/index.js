const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const Port = 3000

app.use(express.json())

let todos = []

app.get('/',(req,res)=>{
    res.send("Todos Server")
})

app.get('/todos',(req,res)=>{
    res.status(200).json(todos)
})

app.get('/todos/:id',(req,res)=>{
    const todoId = todos.find(t => t.id === parseInt(req.params.id))
    if(!todoId){
        res.status(404).send()
    }else{
        res.status(200).json(todos[todoId])
    }
})

let count = 1;


app.post('/todos',(req,res)=>{
    const newTodo = {
        id : count,
        title : req.body.title,
        completed : false,
        description : req.body.description
    }
    count++;
    todos.push(newTodo);
    res.status(200).json(newTodo)
})


app.put('/todos/:id',(req,res)=>{
    const todoId = todos.find(t => t.id === parseInt(req.params.id))
    if(!todoId){
        res.status(404).send()
    }else{
        todos[todoId].title = req.params.title;
        // todos[todoId].completed = req.params.completed;
        todos[todoId].description = req.params.description;
    }
    res.status(200).json(todos[todoId])
})

app.delete('/todo/:id',(req,res) =>{
    const todoId = todos.find(t => t.id === parseInt(req.params.id))
    if(todoId === -1){
        res.status(404).send()
    }else{
        todos.splice(todoId,1)
        res.status(200).send()
    }
})

app.use((req, res, next) => {
    res.status(404).send();
  });

app.listen(Port,()=>{
    console.log(`Server started ${Port}`)
})