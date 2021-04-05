import React, { useState } from 'react'
import {BiEdit, BiXCircle} from 'react-icons/bi';
import TodoForm from './TodoForm';
const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} placeholder={edit.value} />
    }

    
    return todos.map((todo, index) => <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' } key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
        <div className="icons">
            <BiEdit onClick={() =>{setEdit({id: todo.id, value: todo.text})} } className='edit-icon'/>
            <BiXCircle onClick={() =>{removeTodo(todo.id)} } className='delete-icon'/>
         </div>
    </div>)
    
}

export default Todo;

