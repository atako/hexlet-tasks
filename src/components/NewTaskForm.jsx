import React from 'react'; // eslint-disable-line
import { Field, reduxForm } from 'redux-form'; // eslint-disable-line

// BEGIN (write your solution here)
class NewTaskForm extends React.Component {
  addTask = (values) => {
    this.props.addTask({ text: values.text })
    this.props.reset()
  }
  render() {
    return <form onSubmit={this.props.handleSubmit(this.addTask)} action="" className="form-inline" >
      <div className="form-group mx-3">
        <Field
          name='text'
          type="text"
          required
          component='input'
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
  }
}
export default reduxForm({
  form: 'newTask'
})(NewTaskForm)
// END

