import * as taskApiUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const deleteTask = task => ({
  type: DELETE_TASK,
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

export const fetchTask = id => dispatch => (
  taskApiUtil.getTask(id)
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

export const removeTask = taskId => dispatch => (
  taskApiUtil.deleteTask(taskId)
             .then(deletedTask => dispatch(deleteTask(deletedTask)))
             .catch(errors => dispatch(receiveTaskErrors(errors)))
);
