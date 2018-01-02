import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import ModalReducer from './modal_reducer';

const UiReducer = combineReducers({
  errors: ErrorsReducer,
  modalOpen: ModalReducer
});

export default UiReducer;
