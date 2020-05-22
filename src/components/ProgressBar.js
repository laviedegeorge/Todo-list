import React from 'react'

function ProgressBar (props){
    const completedTodo = props.todos.filter(todo=>todo.completed === true);
    const percent = (completedTodo.length/props.todos.length) * 100;
    return (
        <div className="meter">
            <span style={{width: `${percent}%`}}></span>
        </div>
    )
}

export default ProgressBar