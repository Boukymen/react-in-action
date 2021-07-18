import React, {useState} from 'react'
import Todo from './components/Todo';
import './components/Todo.css'
function App() {
  
  return (
    <div className="App">
    <div className="entete">
      <h1>My todos List</h1>
    </div>
      <div className = "container">
         <Todo  />
      </div>
    </div>
  );
}

export default App;
