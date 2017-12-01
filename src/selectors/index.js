import { createSelector } from 'reselect'; // eslint-disable-line

// BEGIN (write your solution here)
export const tasksSelector = (state) => {
  const getTasks = state => state.tasks
  const tasksAsArray = createSelector(
    getTasks,
    tasks => Object.values(tasks)
  )
  return tasksAsArray(state)
}