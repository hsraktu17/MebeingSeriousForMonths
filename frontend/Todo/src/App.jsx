import { useState } from "react";

function App(){

  const [todo, setTodo] = useState([{
    title : "frontend",
    description : "learn react",
    completed : false
  },{
    title : "backend",
    description : "learn node",
    completed : false
  },{
    title : "full stack",
    description : "learn react + node",
    completed : false
  }])

  function addTodos(){
    setTodo([...todo, {
      title : "Get the new task",
      description : "figure out the task by yourself"
    }])
    console.log(todo.length)
  }

  return (
    <div>
      <button onClick={addTodos}>Add new Task</button>
      {todo.map((todos)=>{
        return <Todo title = {todos.title} description = {todos.description} />
      })}
    </div>
  )
}

function Todo(props){
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  )
}

export default App;