import React, { useState } from "react";

const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div className="form-container">
                    <input className="todo-input" type="text" placeholder="Write items" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    <button type="submit" className="todo-btn">Add</button>
                </div>
            </form>
        </section>
    );
}

export default TodoForm;