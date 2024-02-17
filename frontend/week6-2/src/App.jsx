import { useEffect, useState } from "react"

function App(){

  const [click, setClick] = useState(1);

  return (
    <div>
      <button onClick={()=> setClick(1)}>1</button>
      <button onClick={()=> setClick(2)}>2</button>
      <button onClick={()=> setClick(3)}>3</button>
      <button onClick={()=> setClick(4)}>4</button>
      <button onClick={()=> setClick(5)}>5</button>
      <Todo id = {click}/>
    </div>
  )
}

function Todo({id}){

  const [todo, setTodo] = useState({})

  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todo?id='+id)
      .then(async function (res){
        const json = await res.json();
        setTodo(json.todo);
        console.log("hi")
      })
  },)

  return (
    <div>
      <h1> {todo.title} </h1>
      <h4> {todo.description} </h4>

    </div>
  )
}

export default App;