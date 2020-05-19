import React from 'react';
import AddTodo from './AddTodo'
class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
    }

    render(){
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        const showModal =this.state.modal? {display: "flex"}:{display:"none"};
        
        return(
            <div className="todo-item">
                <div className="todo-item-cont">
                    <div
                        style={{display:'flex'}}
                    >
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
                
                    <div>
                        <button 
                            className="btn edit-btn"
                            onClick={this.toggle}
                        >
                            Edit
                        </button>
                        <button
                            className="btn del-btn"
                            onClick={()=>{
                                this.props.deleteTodo(this.props.data.id)
                            }}
                        >
                            Delete
                        </button>
                    </div>

                </div>
                <div >
                    <div 
                        style={showModal}
                        className='modal'
                        >
                        <button
                            className='btn close-btn'
                            onClick={this.toggle}
                        >
                            X</button>
                        <AddTodo
                            id = {this.props.data.id}
                            edit= {this.props.edit}
                            btnText='Update'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo