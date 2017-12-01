import React from 'react'; // eslint-disable-line
import NewTaskFormContainer from '../containers/NewTaskForm';
import TasksListContainer from '../containers/TasksList';

// BEGIN (write your solution here)
export default class App extends React.Component {
  render() {
    return <div className='col-5'>
      <NewTaskFormContainer />
      <TasksListContainer />
    </div>
  }
}