import { combineReducers } from 'redux';
import TasksReducer from './tasks_reducer';

const EntitiesReducer = combineReducers({
  tasks: TasksReducer
});

export default EntitiesReducer;
