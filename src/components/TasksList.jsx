import React from 'react'; // eslint-disable-line

export default class TasksList extends React.Component {
  removeTask = id => (e) => {
    e.preventDefault()
    this.props.removeTask({ id })
  }
  // BEGIN (write your solution here)
  toogleTask = id => (e) => {
    e.preventDefault()
    this.props.toogleTaskState({ id })
  }

  renderTasks = () => {
    return <ul className="list-group">
      {this.props.tasks.map(task => {
        return <li className="list-group-item d-flex justify-content-end" key={task.id}>
          <a href="#" className="app-toggle-state mr-3" onClick={this.toogleTask(task.id)}>-</a>
          <div className="mr-auto">{task.state === 'active' ? task.text : <s>{task.text}</s>}</div>
          <a className="app-remove-task" href="#" onClick={this.removeTask(task.id)}>x</a>
        </li>
      })}
    </ul>
  }
  // END

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return <div className="mt-3">
      {this.renderTasks()}
    </div>;
  }
}
// END

