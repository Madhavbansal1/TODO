import React, { useState } from 'react'

function Form(props) {
    let [input,setInput] = useState();
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newTodo = {
            id: props.todos.length + 1,
            title: input,
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
