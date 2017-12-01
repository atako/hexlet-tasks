import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
import * as actions from '../actions'; // eslint-disable-line

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
  [actions.removeTask](state, { payload: { id } }) {
    return _.omit(state, id);
  },
  // BEGIN (write your solution here)
  [actions.toogleTaskState](state, { payload: { id } }) {
    const taskForChange = _.mapValues(state, function (o) {
      if (o.id === id) {
        const activeState = o.state === 'active' ? 'finished' : 'active'
        return { text: o.text, state: activeState, id: o.id }
      }
      return o
    })
    console.log(taskForChange)
    return taskForChange
  }
  // END
}, {});

const newTaskText = handleActions({
  [actions.addTask]() {
    return '';
  },
  [actions.updateNewTaskText](state, { payload: { text } }) {
    return text;
  },
}, '');

export default combineReducers({
  tasks,
  newTaskText,
});
