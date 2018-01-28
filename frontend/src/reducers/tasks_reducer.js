import * as TaskActions from '../actions/task_actions';

const TaskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TaskActions.RECEIVE_ALL_TASKS:
      return action.tasks.data;
    case TaskActions.RECEIVE_TASK:
      return Object.assign({}, state, { [action.task.data.id]: action.task.data });
    case TaskActions.REMOVE_TASK:
      let newState = Object.assign({}, state);
      delete newState[action.task.data.id];
      return newState;
    default:
      return state;
  }
};

export default TaskReducer;
