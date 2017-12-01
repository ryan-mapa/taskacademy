import * as taskApiUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const fetchAllTasks = () => dispatch => (
  taskApiUtil.getTasks().then(tasks => dispatch(receiveAllTasks(tasks)))
      .catch(errors => dispatch(receiveTaskErrors(errors)))
);

export const fetchTask = id => dispatch => (
  taskApiUtil.getTask(id).then(task => dispatch(receiveTask(task)))
      .catch(errors => dispatch(receiveTaskErrors(errors)))
);
