import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
   
  }
  
  create(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }

  remove(id){
    this.setState(
      {
        todos: this.state.todos.filter(t => t.id !== id)
      }
    )

  }

  updateTodo(id, newTodo){
    const updatedTodos = this.state.todos.map(
      todo => {
        if(todo.id === id){
          return {...todo, task:newTodo}
        }
        return todo
      })
      this.setState({todos:updatedTodos})

  }

  render() {
    const todos = this.state.todos.map( todo => {
      return <Todo key = {todo.id} task={todo.task} id= {todo.id} rem = {this.remove} updateTodo = {this.updateTodo}/>
    });

    return(
      <div className="TodoList">
        <h2>The Todo App</h2>

      <ul>{todos}</ul>

      <TodoForm create = {this.create}/>

      
    </div>
    ); 
  }
}
export default TodoList;
