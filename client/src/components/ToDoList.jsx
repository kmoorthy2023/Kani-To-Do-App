import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({todos, toggleComplete, deleteTodo}) => {
  return (
    <>
      {/* displaying a list of to-do items */}
      <ol className='itemList'>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ol>
    </>
  )
}

export default ToDoList;