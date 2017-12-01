import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';

const UiReducer = combineReducers({
  errors: ErrorsReducer
});

export default UiReducer;
