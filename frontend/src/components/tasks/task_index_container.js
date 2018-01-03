import { connect } from 'react-redux';
import {
  fetchAllTasks,
  fetchTask,
  editTask,
  deleteTask
} from '../../actions/task_actions';
import TaskIndex from './task_index';
import { selectMainTasks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  tasks: selectMainTasks(state),
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId)),
  editTask: task => dispatch(editTask(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
