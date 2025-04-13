import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const { todos, deleteTodo, checkTodo } = props;
    // console.log(todos);
    const allTodos = todos.map((todo,index)=>{
        return (
            <Todo key={todo.id} todo={todo} index = {index} deleteTodo={deleteTodo} checkTodo = {checkTodo}/>
        )
    })
    return (
        <>
        <section>
            <ul>
                {allTodos}
            </ul>
        </section>
        </>
    )
}

export default TodoList
