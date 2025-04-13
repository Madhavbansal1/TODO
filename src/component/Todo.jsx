
import React from 'react'

function Todo(props) {
    const { todo } = props;
    console.log(props);

    function delete1(id){
        props.deleteTodo(id);
    }
    
    function check1(id){
        props.checkTodo(id);
    }   
    return (
        <>
        <div>
            <li style={{textDecoration: todo.checked ? 'line-through' : 'none'}}>
                <input type="checkbox" checked={todo.checked} onChange={()=> check1(todo.id)}/>
                <p> ID: {todo.id} -- Task: {todo.title} </p>
                <span onClick={()=> delete1(todo.id)}> Delete</span>
            </li>
        </div>
        </>
    )
}

export default Todo
