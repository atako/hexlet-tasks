import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/TasksList.jsx';
import * as actionCreators from '../actions';
import { tasksSelector } from '../selectors';

// BEGIN (write your solution here)
const mapStateToProps = state => {
  const tasksArray = tasksSelector(state)
  const props = {
    tasks: tasksArray
  }
  return props
}

const Container = connect(
  mapStateToProps,
  actionCreators
)(Component)
// END

export default Container;