import _ from 'lodash'; // eslint-disable-line
import { createAction } from 'redux-actions'; // eslint-disable-line

export const addTask = createAction('TASK_ADD', task =>
  ({ task: { ...task, id: _.uniqueId() } }));
export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE');
// BEGIN (write your solution here)
export const removeTask = createAction('TASK_REMOVE')