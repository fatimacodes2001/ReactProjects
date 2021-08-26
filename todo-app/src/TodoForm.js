import React, { Component } from "react";
import uuid from 'uuid/v4'
import "./NewTodoForm.css";



class TodoForm extends Component{
    constructor(props){
        super(props)
        this.state = { task:"" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit(event){
        event.preventDefault()
        this.props.create({...this.state, id:uuid()})

    }

    render(){
        return(
            <form className="NewTodoForm" onSubmit={ this.handleSubmit }>
            <label htmlFor="task">New Todo</label>
            <input type="text" name="task" value={this.state.task} onChange={this.handleChange} placeholder="New Todo" id='task'/>
            <button>Submit</button>

            </form>

        )
        

    }



}

export default TodoForm