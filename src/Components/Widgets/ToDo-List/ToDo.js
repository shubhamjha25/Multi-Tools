import React, { Component } from 'react';
import './ToDo.css';

class ToDoList extends Component {

  state = {
    todoList : []
  }

  render(){
    return (
      <div className="wrap-todo">
        <div className="container">

          <div className="row">

              <div className="col-md-6 offset-md-3 mt-5">

                <div className="jumbotron jumbotron-fluid py-2">
                  <div className="container">
                    <h1 className="display-2"> ToDo List </h1>
                    <p className="lead">Manage Your Task More Effectively !</p>
                  </div>
                </div>

                <form className="mb-3" onSubmit={this.handleFormSubmit}>
                  <div className="input-group">
                    <input type="text" name="todotask" className="form-control" placeholder="Enter The Task"/>
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-outline-primary"><strong>Add Task</strong></button>
                    </div>  
                  </div>
                </form>

                <ul className="list-group">
                  <h3>The Tasks To Be Done Are : </h3>
                  {
                    this.state.todoList.map(
                      (item, index) => {
                        return (<li className="list-group-item" key="index">
                                {item}
                                <button className="btn btn-outline-success float-right" onClick={(event) => {this.delTask(event, index)}}>Done</button>
                              </li>);
                      }
                    )
                  }
                </ul>

              </div>
          </div>
        </div>
      </div>
      
      );
  } 

  handleFormSubmit = (event) => {
    var taskDef = event.target.elements.todotask.value;
    if(taskDef.length > 0) {
      this.setState({
        todoList:[...this.state.todoList, taskDef]
      })
      event.target.reset()
    }
    event.preventDefault();
  }

  delTask = (event, index) => {
    var taskArray = [...this.state.todoList]
    taskArray.splice(index,1)
    this.setState({todoList:taskArray})
  }
}

export default ToDoList;