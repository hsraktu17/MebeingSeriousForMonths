import { useEffect, useState } from "react";

function App(){

  const[clicker, setClicker] = useState(1)  

  return <div>
    <button onClick={()=>{
      setClicker(1)
    }} > 1</button>

    <button onClick={()=>{
      setClicker(2)
    }} >2</button>

    <button onClick={()=>{
      setClicker(3)
    }} >3</button>

    <button onClick={()=>{
      setClicker(4)
    }} >4</button>

    <Todo id = {clicker}/>

  </div>
}

function Todo ({id}){
  const [todo, setTodo] = useState({})

  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todo?id='+id)
      .then(async function(res){
        const json = await res.json()
        setTodo(json.todo)
      })
  },[id])

  return <div>
    <p>{id}</p>
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}

export default App;