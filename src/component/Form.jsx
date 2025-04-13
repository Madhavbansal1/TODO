import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

function Form(props) {
    let [input,setInput] = useState();
    const[isValid,setisValid] = useState(true);
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
        if(input.trim().length > 0){
            setisValid(true);
        }
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(input.trim().length === 0){
            setisValid(false);
            return;
        }
        const newTodo = {
            id: uuid(),
            title: input,
            checked: false
        }
        props.addTodo(newTodo);

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
