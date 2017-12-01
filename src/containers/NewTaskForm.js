import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/NewTaskForm.jsx';
import * as actionCreators from '../actions';

// BEGIN (write your solution here)
const mapStateToProps = state => {
  const props = {
    newTaskText: state.newTaskText
  }
  return props
}

export default connect(
  mapStateToProps,
  actionCreators
)(Component)