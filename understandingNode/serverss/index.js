const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

let todos = [];

app.get('/',(req,res)=>{
    res.send("heyy there!!")
})

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send();
  } else {
    res.json(todo);
  }
});

let count = 1;
app.post('/todos', (req, res) => {
    const newTodo = {
        id: count, // unique random id
        title: req.body.title,
        description: req.body.description
      };
      count++;
      todos.push(newTodo);
      res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
});



// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})