import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
     setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]); //?
   };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
export default App;
