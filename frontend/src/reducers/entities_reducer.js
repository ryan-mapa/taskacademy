import { combineReducers } from 'redux';
import TasksReducer from './tasks_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tasks: TasksReducer
});

export default EntitiesReducer;
