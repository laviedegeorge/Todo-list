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
      newTodo: {
        id: '',
        text: '',
        completed: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
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

  changeValue(event){
    const idNum = this.state.todos.length + 1;
    this.setState({
      newTodo: {
        id: idNum,
        [event.target.name]: event.target.value,
        completed: false
      }
    })
  }

  addNewTodo(){
    const newTodo = this.state.newTodo;
    this.setState((prevState)=>{
      return{
        todos:[
          ...prevState.todos,
          newTodo
        ],
        newTodo: {
          id: '',
          text: '',
          completed: false
        }
      }
    })
    console.log()
  }

  render(){
    const todoList = this.state.todos.map((todo)=>{
      return(
        <Todo
          key={todo.id}
          data={todo}
          handleChange= {this.handleChange}
        />
      )

    })
    return(
      <div className="todo-list">
        <AddTodo
          handleChange= {this.changeValue}
          text={this.state.newTodo.text}
          add= {this.addNewTodo}
        />
        <p>{this.state.newTodo.text}</p>
        {todoList}
      </div>
    )
  }
  

}

export default App;
