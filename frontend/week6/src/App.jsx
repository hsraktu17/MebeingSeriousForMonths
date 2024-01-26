import { useState } from "react"

function App() {
  return (
    <div>
      <CardWrapper innerComponent = {<TextComponent/>}/>
      <CardWrapper innerComponent = {<TextComponent/>}/>
      <Card>
        <h1>
          Hi there!!
        </h1>
        <h3>
          I am utkarsh
        </h3>
      </Card>
    </div>
  )
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

function CardWrapper({innerComponent}){
  return <div style = {{border : "2px solid black"}}>
    {innerComponent}
  </div>
}
function Card({children}){
  return <div style = {{border : "10px solid green", padding : 100}}>
    {children}
  </div>
}


export default App