import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos';

class Todos extends React.Component {

  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddTodo(
      this.inputRef.value,
      () => this.inputRef.value = ''
    ));
  }
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  }
  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id));
  }
  render() {
    return (
      <form className="form">
        <div className='card todos'>
          <h2 className="card-title">Todo List</h2>
          <div className="card-body">
            <div className="form-group">
              <input ref={input => this.inputRef = input} className="form-control" type='text' placeholder='Add Todo' />
            </div>
            <button onClick={this.addItem} type="button" className="btn btn-primary">Add Todo</button>
          </div>
          <List
            toggle={this.toggleItem}
            items={this.props.todos}
            remove={this.removeItem}
          />
        </div>
      </form>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
