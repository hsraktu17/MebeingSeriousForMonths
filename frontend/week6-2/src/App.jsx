import { useEffect, useState } from "react";
import axios from 'axios'

function App(){
  return <div>
    <Todo id = {1}/>
  </div>
}

function Todo({id}){
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/todo?id'+id)
    .then(response =>{
      setTodos(response.data.todos)
    })
  },[])
  return <div>
    <h1>
      {todos.title}
    </h1>
    <h3>
      {todos.description}
    </h3>
  </div>
}

export default App