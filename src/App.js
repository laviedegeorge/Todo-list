import React from 'react';
import Todo from './components/TodoItem'
import todosData from './data/TodoData'
import AddTodo from './components/AddTodo'
import './styles/App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData,
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(id){
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

 

  addNewTodo(newTodo){
    const num = Date.now()
    newTodo.id = Number(num.toString() + (this.state.todos.length + 1));
    this.setState((prevState)=>{
      return{
        todos:[
          newTodo,
          ...prevState.todos
        ]
      }
    })
  }

  deleteTodo(id){
    if (window.confirm('Are you sure?')) {
      this.setState((prevState)=>{
        const updatedTodos = prevState.todos.filter(todo=>todo.id !== id)
        return{
          todos: updatedTodos,
          ...prevState.newTodo
        }
      })
    }
  }

  editTodo = (todo, id) => {
    todo.id = id;
    const itemIndex = this.state.todos.findIndex(data => data.id === id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.todos.slice(0, itemIndex),
    // add the updated item to the array
      todo,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.todos.slice(itemIndex + 1)
    ]
    this.setState({ todos: newArray })
  }
  
  render(){
    const todoList = this.state.todos.map((todo)=>{
      return(
        <Todo
          key={todo.id}
          data={todo}
          handleChange= {this.handleChange}
          deleteTodo= {this.deleteTodo}
          edit={this.editTodo}
        />
      )

    })
    return(
      <div className="todo-list">
        <AddTodo
          //handleChange= {this.changeValue}
          //text={this.state.newTodo.text}
          edit= {this.addNewTodo}
          btnText='Add'
        />
        {todoList}
      </div>
    )
  }
  

}

export default App;
