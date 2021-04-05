import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            })
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" placeholder={props.placeholder} value={input}
                name="text" className={props.edit ? 'todo-input edit' : 'todo-input'} onChange={handleChange} ref={inputRef}/>
                <button className={props.edit ? 'todo-btn edit' : 'todo-btn'}>{props.edit ? 'Submit' : 'Add'}</button>
            </form>
        </div>
    )
}

export default TodoForm
