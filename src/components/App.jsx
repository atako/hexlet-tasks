import React from 'react'; // eslint-disable-line
import { updateNewTaskText, addTask } from '../actions';

// BEGIN (write your solution here)
export default class App extends React.Component {
  handleChange = (e) => {
    e.preventDefault
    this.props.dispatch(updateNewTaskText({ text: e.target.value }))
  }
  handleAdd = (e) => {
    e.preventDefault()
    this.props.dispatch(addTask({ text: this.props.taskText }))
    this.props.dispatch(updateNewTaskText({ text: '' }))
  }
  render() {
    return <div className="col-5">
      <form action="" className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group mx-sm-3">
          <input type="text" required={true} value={this.props.taskText} onChange={this.handleChange}></input>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add</button>
      </form>
      {this.props.tasks.length > 0 ? <div className='mt-3'>
        <ul className='list-group'>
          {this.props.tasks.map(value => {
            return <li className='list-group-item d-flex justify-content-end' key={value.id}>{value.text}</li>
          })}
        </ul>
      </div> : null}
    </div>
  }
}