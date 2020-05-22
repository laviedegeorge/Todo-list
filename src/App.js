import React from 'react';
import Todo from './components/TodoItem'
//import todosData from './data/TodoData'
import AddTodo from './components/AddTodo'
import './styles/App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      
    }
  }

  handleChange = (id) => {
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
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        return ({
            todos : updatedTodos
        })
    })
  }

 

  addNewTodo = (newTodo)=>{
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

    if (localStorage['todos']) {
      localStorage.setItem('todos',JSON.stringify([newTodo, ...this.state.todos]));
    } else {
      localStorage.setItem('todos',JSON.stringify([newTodo]))
    }
    
  }

  deleteTodo = (id)=>{
    if (window.confirm('Are you sure?')) {
      this.setState((prevState)=>{
        const updatedTodos = prevState.todos.filter(todo=>todo.id !== id);
        localStorage.setItem('todos',JSON.stringify(updatedTodos));
        return{
          todos: updatedTodos,
        }
      })
    }
  }

  editTodo = (todo, id) => {
    todo.id = id;
    const itemIndex = this.state.todos.findIndex(data => data.id === id)
    const newArray = [
      ...this.state.todos.slice(0, itemIndex),
      todo,
      ...this.state.todos.slice(itemIndex + 1)
    ]
    localStorage.setItem('todos',JSON.stringify(newArray));
    this.setState({ todos: newArray })
  }
  
  componentDidMount(){
    if (localStorage['todos']) {
      const todoList = JSON.parse(localStorage['todos']);
      this.setState({
        todos: todoList
      })
    } else {
      this.setState({
        todos:[]
      })
    }
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
          edit= {this.addNewTodo}
          btnText='Add'
        />
        {todoList}
      </div>
    )
  }
  

}

export default App;
