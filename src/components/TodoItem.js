import React from 'react';

class Todo extends React.Component{
    render(){
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return(
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={this.props.name.completed}
                    onChange={()=>{
                        this.props.handleChange(this.props.name.id)
                    }} 
                />
                <p style={this.props.name.completed? completedStyle: null}>
                    {this.props.name.text}
                </p>
            </div>
        )
    }
}

export default Todo