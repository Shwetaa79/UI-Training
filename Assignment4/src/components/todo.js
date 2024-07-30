import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, updateTodo } from './todoSlice';

const Todo = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null); // State to track which todo is being edited
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (todo) => {
    setText(todo.text);
    setEditId(todo.id); 
  };

  const handleUpdateTodo = () => {
    if (text && editId) {
      dispatch(updateTodo({ id: editId, text })); // Dispatch update action
      setText(""); // Clear the input
      setEditId(null); // Reset editId
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={editId ? handleUpdateTodo : handleAddTo}>
        {editId ? "Update Todo" : "Add Todo"}
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}{" "}
            <button onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>{" "}
            <button onClick={() => handleEditTodo(todo)}>Edit</button> {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;