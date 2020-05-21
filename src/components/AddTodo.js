import React from 'react'

class AddTodo extends React.Component{
    constructor(){
        super()
        this.state = {
            newTodo: {
                id: '',
                text: '',
                completed: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleChange(event){
        this.setState({
          newTodo: {
            id: '',
            [event.target.name]: event.target.value,
            completed: false
          }
        })
    }

    clear(){
        this.setState({
            newTodo: {
                id: '',
                text: '',
                completed: false
            }
        })
    }

    render(){
        const btnColor = this.props.btnText === 'Update'? {backgroundColor: 'rgb(0, 89, 255)'} : {backgroundColor: '#00FF00'}
        return(
            <div>
                <input
                    type='text'
                    name= 'text'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                
                <button
                    style={btnColor}
                    className="btn" 
                    onClick={()=>{
                        const todo = this.state.newTodo;
                        this.clear()
                        this.props.edit(todo, this.props.id);
                    }}
                >
                    {this.props.btnText}
                </button>
            </div>
        )
    }
}

export default AddTodo