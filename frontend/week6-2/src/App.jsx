import { useEffect, useState } from "react";

function App(){

  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async function(res){
      const json = res.json();
      setTodos(json)
    })
  },[])


  return <div>
   {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description} />)}
  </div>
}


function Todo ({title, description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App;