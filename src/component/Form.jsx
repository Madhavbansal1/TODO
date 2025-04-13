import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

function Form(props) {
    let [input,setInput] = useState();
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newTodo = {
            id: uuid(),
            title: input,
            checked: false
        }
        props.addTodo(newTodo);
        console.log(input);
        setInput('');
    }
    return (
        <>
        <form onSubmit={formSubmitHandler}>
            <input type="text" onChange={inputChangeHandler} placeholder='Enter your task' value={input}/>
        </form>
        </>
    )
}

export default Form
