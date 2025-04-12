
import React from 'react'

function Todo(props) {
    const { todo } = props;

    function delete1(id){
        props.deleteTodo(id);
    }
    
    return (
        <>
        <div>
            <li>
                <p>{props.index} -&gt; ID: {todo.id} -- Task: {todo.title} <span onClick={()=> delete1(todo.deleteTodo(todo.id))}> Delete</span></p>
            </li>
        </div>
        </>
    )
}

export default Todo
