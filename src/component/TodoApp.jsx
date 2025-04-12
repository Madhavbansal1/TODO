import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'

function TodoApp() {

    const dummyarray = [
        { id: 1, title: 'Todo 1'  },
        { id: 2, title: 'Todo 2'  },
        { id: 3, title: 'Todo 3' },
    ]

    const[todos,setTodos] = useState(dummyarray);
    function addTodo(todo){
        setTodos([...todos, todo]);
    }
    function deleteTodo(id){
        const newTodos = todos.filter((todo)=> todo.id != id);
        setTodos(newTodos);
    }
    return (
        <>
        <Form addTodo = {addTodo}  todos={todos}/>
        <TodoList todos={todos} deleteTodo = {deleteTodo}/>
        </>
    )

}

export default TodoApp;
