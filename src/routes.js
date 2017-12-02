const host = '';

export default {
  tasksUrl: () => [host, 'tasks'].join('/'), // get tasks list
  taskUrl: id => [host, 'tasks', id].join('/'),
};
