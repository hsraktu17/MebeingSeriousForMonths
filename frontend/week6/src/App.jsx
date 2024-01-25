import { useState } from "react"

let counter = 4;
function App() {
    const [todos, setTodos] = useState([{
      id : 1,
      title : "go to gym",
      description : "come to gym"
    },{
      id : 2,
      title : "go to shop",
      description : "come to shop"
    },{
      id : 3,
      title : "go to market",
      description : "come to market"
    }
  ])

  function addTodo(){
    setTodos([...todos,{
      id : counter++,
      title : "go to class",
      description : "come to class"
    }])
  }

  return (
    <div>
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description} /> )}
      <button onClick={addTodo}>Add todo</button>
    </div>
  )
}

function Todo({title, description}){
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>
    </div>
  )
}


function HeaderWithHeader(){
  const [title, setTitle] = useState("Hi i am Utkarsh");

  function handleChange(){
    setTitle("Hi i am "+ Math.random())
  }

  return (
    <div>
      <button onClick = {handleChange}>Handle change</button>
      <HumanHeader title = {title} description = "Hey aisdfn" />
    </div>
  )
}

function HumanHeader(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}


export default App