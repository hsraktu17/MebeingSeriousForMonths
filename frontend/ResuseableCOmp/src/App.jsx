import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name = "Loskesh" description = "Hello iam TA"/>
      <Card name = "Harry" description = "Hello I am TA"/>
      <Card name = "JOKER" description = "Hello I am Joker"/>

    </>
  )
}

function Card(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <Interest I1 = "Hello" I2 = "Hi"/>
      <p>Connections</p>
      <Button social1 = "LinkedIN"/>
      <Button social1 = "Twitter"/>
    </div>
  )
  
}


function Button(props) {
  return (
    <>
      <button>{props.social1}</button>
    </>
  )
}

function Interest(props){
  return (
    <div>
      <h2>Interest</h2>
      <p>{props.I1}</p>
      <p>{props.I2}</p>
    </div>
  )
}

export default App
