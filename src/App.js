import TopBar from "./components/TopBar";
import AddButton from "./components/AddButton";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState(
    [
      {
      text:'Going gym',
      status: false
    },
    {
      text:'but bike',
      status: false
    },
    {
      text:'go to joging',
      status: false
    },
    {
      text:'Going office',
      status: false
    }
    ]
  )   



 
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        < AddButton addtodo={settodos} todos ={todos} />
      </header>
        <ToDoList todos ={todos} settodo={settodos} />
    </div>
  );
}

export default App;
