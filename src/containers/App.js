import { connect } from 'react-redux'; // eslint-disable-line
import App from '../components/App.jsx';

// BEGIN (write your solution here)
const mapStateToProps = state => {
  const props = {
    tasks: state.tasks,
    taskText: state.taskText
  }
  return props
}

export default connect(mapStateToProps)(App)