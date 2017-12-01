import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/TasksList.jsx';
import * as actionCreators from '../actions';

// BEGIN (write your solution here)
const mapStateToProps = state => {
  const props = {
    tasks: state.tasks
  }
  return props
}

export default connect(
  mapStateToProps,
  actionCreators
)(Component)