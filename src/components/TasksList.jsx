import React from 'react'; // eslint-disable-line

const filters = [['all', 'all'], ['active', 'active'], ['finished', 'finished']];

export default class TasksList extends React.Component {
  // BEGIN (write your solution here)
  state = { activeFilter: 'all' }
  // END

  removeTask = id => (e) => {
    e.preventDefault();
    this.props.removeTask({ id });
  }

  toggleTaskState = id => (e) => {
    e.preventDefault();
    this.props.toggleTaskState({ id });
  }

  // BEGIN (write your solution here)
  applyFilter(state) {
    this.setState({ activeFilter: state });
  }

  renderTasks() {
    const rawTasks = this.props.tasks;
    const filter = this.state.activeFilter;
    const tasks = filter === 'all' ? rawTasks : rawTasks.filter(t => t.state === filter);

    return <ul className="list-group">
      {tasks.map(({ id, text, state }) =>
        <li key={id} className="list-group-item d-flex justify-content-end">
          <a href="#" className="app-toggle-state mr-3" onClick={this.toggleTaskState(id)}>-</a>
          <div className="mr-auto">{(state === 'finished' ? <s>{text}</s> : text)}</div>
          <a href="#" className="app-remove-task" onClick={this.removeTask(id)}>x</a>
        </li>,
      )}
    </ul>;
  }

  renderFilter([state, name]) {
    return this.state.activeFilter === state ?
      name : <a key={state} className={`app-filter-${name}`} href="#" onClick={() => this.applyFilter(state)}>{name}</a>;
  }
  // END

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    // BEGIN (write your solution here)
    return <div className="mt-3">
      {this.renderTasks()}
      <div className="col-8 mt-3 d-flex justify-content-around">
        {filters.map(filter => this.renderFilter(filter))}
      </div>
    </div>
    // END
  }
}

