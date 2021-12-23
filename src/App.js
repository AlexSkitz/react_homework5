import React from "react";
import ToDoGroups from "./Components/ToDoGroups";
import ToDoList from "./Components/ToDoList";
import ToDoFilter from './Components/ToDoFilters';
function App() {
  return (
    <div className="toDo">
      <ToDoGroups />
      <ToDoList />
    </div>
  )
}

export default App;