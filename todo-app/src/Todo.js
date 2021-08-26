import React, { Component } from "react";
import "./Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this)
    this.setEdit = this.setEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.onChange = this.onChange.bind(this)
   
  }

  handleRemove(){
    this.props.rem(this.props.id)
  }

  setEdit(){
    this.setState({isEditing:true})
  }

   handleUpdate(event){
    event.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({isEditing:false})
    

  }

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
  })
  }
  
  render() {
    var result
    if(this.state.isEditing){
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input onChange={this.onChange} name="task" type="text" />
            <button>Submit</button>
          </form>
        </div>
      )
    }
    else{

      result = (<div className="Todo">
      
      <li className="Todo-task" >{ this.props.task }</li>
      <div className="Todo-buttons">
      <button onClick = {this.setEdit}>
        <i className="fas fa-pen" />
      </button>
      <button onClick={this.handleRemove}>
      <i className="fas fa-trash" />
      </button>
      </div>
    </div>)

    }

    return result
  }
}
export default Todo;
