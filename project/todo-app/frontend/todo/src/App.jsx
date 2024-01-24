import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  return (
    <div>
      
      <CreateTodo ></CreateTodo>
     <Todos
        title = "Task1"
        description =  "Description 1"
        isCompleted = {false}
     />
    </div>
  )
}

export default App
