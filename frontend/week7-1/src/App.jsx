import React, { useState } from "react";
import Landing from "./ components/Landing";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const Dashboard = React.lazy(() => import("./ components/Dashboard"))

function App(){
  const [count, setCount] = useState(0)
  return (
    <div>
      
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/Dashboard' element = { <Dashboard /> } />
          <Route path='/' element = { <Landing /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return (
    <div>
      <div style={{background : "pink"}}>
          Hi from top bar
          <button onClick={() => navigate('/')}>Landing Page</button>
          <button onClick={() => navigate('/Dashboard')}>DashBoard page</button>
      </div>
    </div>
  )
}

export default App;