import * as taskApiUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const fetchAllTasks = ownerId => dispatch => (
  taskApiUtil.getTasks(ownerId)
             .then(tasks => dispatch(receiveAllTasks(tasks)))
             .catch(errors => dispatch(receiveTaskErrors(errors)))
);

export const fetchTask = taskId => dispatch => (
  taskApiUtil.getTask(taskId)
             .then(task => dispatch(receiveTask(task)))
             .catch(errors => dispatch(receiveTaskErrors(errors)))
);

export const editTask = task => dispatch => (
  taskApiUtil.patchTask(task)
             .then(newTask => dispatch(receiveTask(newTask)))
             .catch(errors => dispatch(receiveTaskErrors(errors)))
);

export const createTask = task => dispatch => (
  taskApiUtil.postTask(task)
             .then(newTask => dispatch(receiveTask(newTask)))
             .catch(errors => dispatch(receiveTaskErrors(errors)))
);

export const deleteTask = taskId => dispatch => (
  taskApiUtil.deleteTask(taskId)
             .then(task => dispatch(removeTask(task)))
             .catch(errors => dispatch(receiveTaskErrors(errors)))
);
