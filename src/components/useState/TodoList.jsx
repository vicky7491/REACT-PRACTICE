import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue("");

        }

    }


    const handleChange = e => {
        setInputValue(e.target.value);
    }

  return (
    <div>
        <h2>TODO list</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Add a new todo'/>
            <button type='submit'>Add TODO</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
    </div>
  )
}

export default TodoList