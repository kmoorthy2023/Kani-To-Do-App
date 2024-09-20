# To-Do List Application

## Overview

The To-Do List Application is a full-stack project built with React on the front-end and Express.js on the back-end. The application allows users to manage their tasks by adding, toggling the completion status, and deleting to-do items. It features a simple and intuitive interface and uses an in-memory storage solution for to-do items.

## Features

- **Add** new to-do items
- **Toggle** completion status of existing to-dos
- **Delete** to-do items
- **View** tasks categorized into "To-Do List" and "Completed"

## Technologies Used

- **Front-End**: React
- **Back-End**: Express.js
- **Middware**: CORS
- **HTTP Client**: Axios
- **Styling**: CSS

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation and Running the Application

1. **Clone the Repository**

   First, clone the repository to your local machine:

   git clone [https://github.com/your-username/Kani-to-do-list-app.git](https://github.com/kmoorthy2023/Kani-To-Do-App.git)
   cd todo-list-app

2. **Install Dependencies**
   The project consists of two parts: the server and the client. You need to install dependencies       for both.
   
   # Server
   Navigate to the server directory and install dependencies:

   cd server
   npm install

   # Client

   Navigate to the client directory and install dependencies:

   cd ../client
   npm install
   
3. **Run the Server**

   Open a terminal, navigate to the server directory, and start the Express server:

  cd server
  npm start

  The server will be running at http://localhost:3001.
  
4. **Run the Client**

  Open another terminal, navigate to the client directory, and start the React development server:

  cd ../client
  npm start

  The client will be available at http://localhost:3000.
  
5. **Access the Application**

   Open your web browser and navigate to http://localhost:3000 to use the To-Do List application.

## Folder Structure
todo-list-app/
├── client/                   # Front-end application
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   │   ├── Main.js       # Main component
│   │   │   ├── AddToDo.js    # Component for adding new to-dos
│   │   │   ├── ToDoItem.js   # Component for a single to-do item
│   │   │   └── ToDoList.js   # Component for listing to-dos
│   │   └── App.js            # Main entry point of the React app
|   |   └── App.css           # Css file for custom styling
│   └── public/               # Static files
└── server/                   # Back-end application
    └── index.js              # Express server file

## API Endpoints

- GET /todo-list: Retrieve all to-do items.
- POST /todo-list: Add a new to-do item.
- PUT /todo-list/:id: Update the completion status of a to-do item.
- DELETE /todo-list/:id: Delete a to-do item.
"# Kani-To-Do-App" 
