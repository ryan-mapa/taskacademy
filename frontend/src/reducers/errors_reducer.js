import * as TaskActions from '../actions/task_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case TaskActions.RECEIVE_TASK_ERRORS:
      return action.errors;
    case TaskActions.RECEIVE_ALL_TASKS:
      return [];
    case TaskActions.RECEIVE_TASK:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
