import { React, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App(){

  // const navigate = useNavigate()

  return <div>

    <div>
      {/* <button onClick={()=> 
        window.location.href = '/'
        }>Landing Page</button>

      <button onClick={()=>{
        window.location.href = '/Dashboard'
      }}>Dashboard page</button>
       */}
      
    </div>

    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path = '/Dashboard' element = {<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
        <Route path = '/' element = {<Suspense fallback={"loading..."}><Landing/></Suspense>} />
      </Routes>
    </BrowserRouter>

  </div>
}

function AppBar(){
  const navigate = useNavigate()
  return <div>
    <button onClick={()=> navigate('/')}>Landing</button>

    <button onClick={()=> navigate('/Dashboard')}>Dashboard</button>
  </div>
}

export default App;