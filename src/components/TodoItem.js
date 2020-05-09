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
                    checked={this.props.data.completed}
                    onChange={()=>{
                        this.props.handleChange(this.props.data.id)
                    }} 
                />
                <p style={this.props.data.completed? completedStyle: null}>
                    {this.props.data.text}
                </p>
            </div>
        )
    }
}

export default Todo