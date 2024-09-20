import React from 'react';
import deleteIcon from './delete.png';

const ToDoItem = ({todo, toggleComplete, deleteTodo}) => {

  // Function to handle the toggling of completion status
  const handleToggle = () => {
    toggleComplete(todo.id)
  }

  // Function to handle the deletion of the to-do item
  const handleDelete = () =>{
    deleteTodo(todo.id)
  }

  return (
    <>

      {/* list element for displaying a single to-do item */}
      <li>
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
        <label>{todo.text}</label>
        <button style={{
          background: `url(${deleteIcon}) no-repeat center center`,
          backgroundSize: 'contain',
          border: 'none',
          width: '25px',
          }} onClick={handleDelete}>
        </button>
      </li>
      
    </>
  )
}

export default ToDoItem;