import './styles/styles.css'
import Form from './components/Form';
import Header from './components/Header';
import TodoHero from './components/TodoHero';
import TodoList from './components/TodoList';
import React from 'react';

function App() {
  const [todos,setTodos]=React.useState([
    {title:"Wakeup 6 AM",id:1,is_completed:false},
    {title:"Do Exercise",id:2,is_completed:true},
    {title:"Start Learning React",id:3,is_completed:false},
  ])

  const todos_completed=todos.filter((todo)=>todo.is_completed==true).length
  const total_todos=todos.length
  return (
    <div className="wrapper">
      <br></br>
      <br></br>
      <Header title="Todo Task App"/>
      <TodoHero todos_completed={todos_completed} total_todos={total_todos}/>
      <Form setTodos={setTodos}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
