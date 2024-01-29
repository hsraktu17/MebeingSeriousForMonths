import { useEffect, useMemo, useState } from "react";

function App(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  const [finalValue, setFinalValue] = useState(0)


  let count = useMemo(()=>{
    let count = 0;
    for (let i = 0; i <= count; i++){
      count = count + i;
    }
    return count;
  },[inputValue])



  return <div>
    <input type="text" placeholder="Enter the number" onChange={e => setInputValue(e.target.value)}/>
    <p>the sum of 0 to {inputValue} is {count} </p>
    <button onClick={()=>{
      setCounter(counter + 1)
    }}>Counter {counter} </button>
  </div>
}

export default App;