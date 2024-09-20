import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

const Main = () => {
    const [todos, setTodos] = useState([])

    // fetch the list of to-dos from the server
    useEffect(() => {
        const fetchTodos = async () => {
          try {
            const response = await axios.get('http://localhost:3001/todo-list');
            setTodos(response.data);
          } catch (error) {
            console.error('Error fetching todos:', error);
          }
        };
        fetchTodos();
      }, []);
    
    // Function to add a new to-do item
    const addTodo = async (text) => {
    try {
        const response = await axios.post('http://localhost:3001/todo-list', { text });
        setTodos([...todos, response.data]);
    } catch (error) {
        console.error('Error adding todo:', error);
    }
    };

    // Function to toggle the completion status of a to-do item
    const toggleComplete = async (id) => {
        try {
            await axios.put(`http://localhost:3001/todo-list/${id}`);
            setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ));
        } catch (error) {
            console.error('Error toggling todo completion:', error);
        }
    };
    
    // Function to delete a to-do item
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/todo-list/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    // Filter to-dos into incomplete and completed state
    const incompleteTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);


  return (
    <>
        <h1>My To-Do App</h1>
        <AddToDo addTodo={addTodo}/>

        <div className='todoList'>

        {/* coniditional statement to dispaly incomplete tasts only */}
        <h2>To-Do List</h2>
        {incompleteTodos.length === 0 ? (
            <p>Empty List</p>
        ): (
            <ToDoList todos={incompleteTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        )}

        </div>
        <div className='todoList'>
        
        {/* coniditional statement to display completed tasts only */}
        <h2>Completed</h2>
        {completedTodos.length === 0 ? (
            <p>No task completed</p>
        ) : (
            <ToDoList todos={completedTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        )}

        </div>
        
    </>
  )
}

export default Main;
