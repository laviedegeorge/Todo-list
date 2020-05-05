import React from 'react';
import Todo from './components/TodoItem'
import todosData from './data/TodoData'
import './styles/App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (id) {
    //console.log("changed", id)
    this.setState((prevState)=> {
        const updatedTodos = prevState.todos.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })

        return ({
            todos : updatedTodos
        })
    })
  }

  render(){
    const todoList = this.state.todos.map((todo)=>{
      return(
        <Todo
          key={todo.id}
          name={todo}
          handleChange= {this.handleChange}
        />
      )

    })
    return(
      <div className="todo-list">
        {todoList}
      </div>
    )
  }
  

}

export default App;
