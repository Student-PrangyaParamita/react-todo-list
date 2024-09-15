import React, { useState } from "react";

import { FaCheck, FaTrashAlt } from "react-icons/fa";

import TodoForm from "./TodoForm";


const TodoList = () => {

    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {

        if (!inputValue) return;

        if(task.includes(inputValue)) return;

        setTask((previousTask) => [...previousTask, inputValue]);

    };

    // delete the items from the list
    const handleDelete = (value) => {
        console.log(task)
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    }

    // Clear all data from todo list
    const handleClearData = () => {
        setTask([]);
    }; 

    return (
       <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
            </header>
            <TodoForm onAddTodo = {handleFormSubmit} />
            <section className="orderList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                            <li key={index} className="todo-item">
                                <button className="check-btn">
                                    <FaCheck />
                                </button>

                                <span className="item-name">{curTask}</span>
                                
                                <button className="delete-btn" onClick={() => handleDelete(curTask)}>
                                    <FaTrashAlt />
                                </button>
                            </li>
                            );
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-all" onClick={handleClearData}>Clear all</button>
            </section>
       </section> 
    );
};

export default TodoList;