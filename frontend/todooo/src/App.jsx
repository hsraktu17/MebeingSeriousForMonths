import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("todo updated", todo);
  }, [todo]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTodo() {
    if (inputValue.trim() !== "") {
      setTodo(prevTodos => [...prevTodos, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todo.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
