import { useEffect, useState } from "react"

function App(){
  return (
    <div>
      <Todo id = {2}/>
    </div>
  )
}

function Todo({id}){

  const [todo, setTodo] = useState([])

  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todo?id'+'id')
      .then(async function (res){
        const json = await res.json();
        setTodo(json);
      })
  },[id])

  return (
    <div>
      <h1> {todo.title} </h1>
      <h4> {todo.description} </h4>

    </div>
  )
}

export default App;