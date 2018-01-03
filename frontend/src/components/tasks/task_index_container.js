import { connect } from 'react-redux';
import {
  fetchAllTasks,
  fetchTask,
  editTask,
  createTask,
  deleteTask
} from '../../actions/task_actions';
import {
  closeModal, openModal
} from '../../actions/modal_actions';
import TaskIndex from './task_index';
import { selectMainTasks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  tasks: selectMainTasks(state),
  user: state.entities.user,
  modalOpen: state.ui.modalOpen
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId)),
  editTask: task => dispatch(editTask(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  createTask: task => dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
