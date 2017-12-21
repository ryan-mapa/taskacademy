import { connect } from 'react-redux';
import {
  fetchAllTasks,
  fetchTask,
  editTask
} from '../../actions/task_actions';
import TaskIndex from './task_index';
import { selectMainTasks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: selectMainTasks(state),
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId)),
  fetchTask: taskId => dispatch(fetchTask(taskId)), // Do we need this here?
  editTask: task => dispatch(editTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
