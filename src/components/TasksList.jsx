import React from 'react'; // eslint-disable-line

export default class TasksList extends React.Component {
  // BEGIN (write your solution here)
  removeTask = id => (e) => {
    console.log(id)
    e.preventDefault()
    this.props.removeTask({ id })
  }
  // END

  render() {
    console.log(this.props)
    const tasks = Object.values(this.props.tasks);
    if (tasks.length === 0) {
      return null;
    }

    return <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text }) =>
          <li key={id} className="list-group-item d-flex justify-content-end">
            <div className="mr-auto">
              {text}
            </div>
            <a href="#" className="app-remove-task" onClick={this.removeTask(id)}>x</a>
          </li>,
        )}
      </ul>
    </div>;
  }
}
