import * as TaskActions from '../actions/task_actions';

const TaskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TaskActions.RECEIVE_ALL_TASKS:
      return action.tasks.data;
    case TaskActions.RECEIVE_TASK:
      return Object.asign({}, state, {[action.task.id]: action.task});
    default:
      return state;
  }
};

export default TaskReducer;
