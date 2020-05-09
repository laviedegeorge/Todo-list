import React from 'react'

class AddTodo extends React.Component{
    render(){
        return(
            <div>
                <input
                    type='text'
                    name= 'text'
                    value={this.props.text}
                    onChange={this.props.handleChange}
                />
                <button onClick={this.props.add}>Add</button>
            </div>
        )
    }
}

export default AddTodo