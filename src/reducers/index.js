import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
import * as actions from '../actions'; // eslint-disable-line

const tasks = handleActions({
  [actions.addTask](state, { payload: { text } }) {
    const item = { id: _.uniqueId(), text: text }
    return [...state, item]
  }
}, [])

const taskText = handleActions({
  [actions.updateNewTaskText](state, { payload: { text } }) {
    return text
  }
}, '')

export default combineReducers({
  tasks, taskText
})