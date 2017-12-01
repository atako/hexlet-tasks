import _ from 'lodash'; // eslint-disable-line
import { createAction } from 'redux-actions'; // eslint-disable-line

export const addTask = createAction('TASK_ADD')
export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE')