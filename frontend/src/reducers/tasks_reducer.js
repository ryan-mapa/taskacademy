import * as TaskActions from '../actions/task_actions';

const TaskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TaskActions.RECEIVE_ALL_TASKS:
      return action.tasks.data;
    case TaskActions.RECEIVE_TASK:
      console.log('Inside TaskReducer, RECEIVE_TASK', action);
      return Object.assign({}, state, {[action.task.data.id]: action.task.data});
    default:
      return state;
  }
};

export default TaskReducer;
