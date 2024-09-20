import React, {useState} from 'react'

const AddToDo = ({addTodo}) =>{ 
  const [item, setItem] = useState(false)
  const [text, setText] = useState("")

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if(text){
      addTodo(text) // Call the addTodo function passed as a prop
      setText('') // Clear the input field
    }
  }


  return (

    <>
      <div className='addTodo'>
        <button onClick={() => setItem(true)}>Add Item</button>
        <br/>
        {/* conditional statement to control the visibility of the input form and to store the input text */}
        {item && <div>
          <input type="text" id="todo-item" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new item to the list"/><br/>
          <button onClick={handleSubmit}>Add</button><button onClick={() => setItem(false)}>Cancel</button>
          </div>}
        </div>
    </>
  )
}

export default AddToDo;