import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid'

function TodoApp() {

    const dummyarray = [
        { id: uuid(), title: 'Todo 1', checked: false  },
        { id: uuid(), title: 'Todo 2', checked: false  },
        { id: uuid(), title: 'Todo 3',checked: false  },
    ]

    const[todos,setTodos] = useState(dummyarray);
    function addTodo(todo){
        setTodos([...todos, todo]);
    }
    function deleteTodo(id){
        // const newTodos = todos.filter((todo)=> todo.id != id); instead of this we can use the below code for reduce space;
        setTodos((previousStateTodo)=> {
            return previousStateTodo.filter((todo)=> todo.id != id);
        })
    }

    function checkTodo(id){ 
        setTodos((previousStateTodo)=>{
            return previousStateTodo.map((todo)=>{
                if(todo.id === id){
                    return {...todo, checked: !todo.checked}
                }
                return todo;
            });
        })
    }
    return (
        <>
        <Form addTodo = {addTodo}  todos={todos}/>          
        <TodoList todos={todos} deleteTodo = {deleteTodo} checkTodo = {checkTodo}/>
        </>
    )

}

export default TodoApp;
