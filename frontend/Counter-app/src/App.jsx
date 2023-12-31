import { useState } from 'react'


function App() {
  
  const [count, setCount] = useState(0);

  

  return (
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
      <br/>
      <CustomButton count = {count-1} setCount = {setCount}></CustomButton>
      <CustomButton count = {count*10} setCount = {setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){
  function onClickHandler(){
    console.log(props.count)
    props.setCount(props.count+1);
  }
  return (
    <button onClick = {onClickHandler}>
      Counter {props.count}
    </button>
  )
}

export default App
