import React from 'react';
import { connect } from 'react-redux';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';
import List from './List';

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddGoal(
      this.inputRef.value,
      () => this.inputRef.value = ''
    ));
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  }
  render() {
    return (
      <form className="form">
        <div className='card goals'>
          <h2 className="card-title">Goals</h2>
          <div className="card-body">
            <div className="form-group">
              <input ref={input => this.inputRef = input} className="form-control" type='text' placeholder='Add Goal' />
            </div>
            <button onClick={this.addItem} type="button" className="btn btn-primary">Add Goal</button>
          </div>
          <List items={this.props.goals}
            remove={this.removeItem}
          />
        </div>
      </form>
    );
  }
}

export default connect(state => ({
  goals: state.goals
}))(Goals);
