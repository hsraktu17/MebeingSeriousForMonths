import { useState } from "react";


function App(){
  const [counter, setCounter] = useState(0)
  return<div>
    <button onClick={()=>{
      setCounter(counter + 1)
    }}>Click!!</button>
    <p> {counter} </p>
    <Todo title = "hwllo" description="afse"  done = {false} />
  </div>
}

interface todoThing{
  title : string,
  description : string,
  done : boolean
}

function Todo(props : todoThing){
  return <div>
    <h1> {props.title} </h1>
    <h2> {props.description} </h2>
    <h6> {props.done} </h6>
  </div>
}

export default App;