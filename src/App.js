import React, { useState, useRef } from "react";
import List from "./Components/List";
import "./App.css";

function App() {
  const [taskList, addTask] = useState([]);
  const task = useRef();

  const handleToDoAdd = (event) => {
    const taskName = task.current.value;
    if (event.key != "Enter") { return; }

    addTask((actualToDos) => { return [...actualToDos, {taskName}] })

    task.current.value = '';
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <input 
        type = "text" 
        ref = {task} 
        onKeyDown = {handleToDoAdd}
        placeholder = "Push Enter to add task..."
      />
      <List tasks={taskList} />

    </div>
  );  
}

export default App;
