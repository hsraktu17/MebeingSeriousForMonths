import { useState } from "react"

function App() {

  return (
    <div>
      Hi there;
      <HeaderWithHeader />
      <HumanHeader title = "Heeelo" description = "HJKsvkh" />
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