const express = require('express');
const cors = require('cors');
const app = express();
port = 3001

app.use(cors()); // Middleware for resource sharing
app.use(express.json()); // Parse incoming JSON requests

let todos = []; // In-memory array for to-do items
let nextId = 1; //setting starting value for to-do item id


// Route to get all to-dos
app.get("/todo-list", (req, res) => {
    res.json(todos);
});

// Route to add a new to-do item
app.post('/todo-list', (req, res) => {
    try {
      const { text } = req.body;
      const newTodo = { id: nextId++, text, completed: false };
      todos.push(newTodo);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: 'Error adding todo' });
    }
});

// Route to toggle the completion status of a to-do item
app.put('/todo-list/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.map(todo =>
      todo.id === parseInt(id) ? { ...todo, completed: !todo.completed } : todo
    );
    res.json({ message: 'Todo updated' });
});
  
// Route to delete a to-do item
app.delete('/todo-list/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.json({ message: 'Todo deleted' });
});
 
// Start the server
app.listen(port, () => console.log(`Server started on PORT ${port}`))