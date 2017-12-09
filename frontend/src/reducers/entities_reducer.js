import { combineReducers } from 'redux';
import TasksReducer from './tasks_reducer';
import UserReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  user: UserReducer,
  tasks: TasksReducer
});

export default EntitiesReducer;
