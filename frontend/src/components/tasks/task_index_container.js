import { connect } from 'react-redux';
import {
  fetchAllTasks,
  fetchTask,
  editTask,
  createTask
} from '../../actions/task_actions';
import {
  closeModal, openModal
} from '../../actions/modal_actions';
import TaskIndex from './task_index';
import { selectMainTasks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: selectMainTasks(state),
  user: state.entities.user,
  modalOpen: state.ui.modalOpen
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId)),
  editTask: task => dispatch(editTask(task)),
  createTask: task => dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
