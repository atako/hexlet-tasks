import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
import * as actions from '../actions'; // eslint-disable-line

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
  // BEGIN (write your solution here)
  [actions.removeTask](state, { payload: { id } }) {
    const newItems = _.omit(state, id)
    return newItems
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
