import React,{ useState, useEffect } from "react";


function App(){
  

  return(
    <div>
      <MyComponent/>
      
    </div>
  )
}



function MyComponent() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // Perform setup or data fetching here 
    console.error("component mounted")

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted")
    };
  }, [count]);
  return <div>
    <p>{count}</p>
    <button onClick={()=>{
      setCount(prevcount => prevcount + 1)
    }}>click me!!</button>
  </div>
  // Render UI
}

export default App;