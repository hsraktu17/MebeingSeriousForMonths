import { useEffect, useState } from "react";

function App(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  const [finalValue, setFinalValue] = useState(0)


  let summer = 0;
  for(let i = 0;i < inputValue; i++){
    summer += i;
  }


  return <div>
    <input type="text" placeholder="Enter the number" onChange={e=>setInputValue(e.target.value)}/>
    <p>the sum from 1 to {inputValue} is {summer}</p>
    <button onClick={()=>setCounter(counter + 1)}>counter {counter}</button>
  </div>
}

export default App;