import { connect } from 'react-redux';
import { editTask, createTask, deleteTask } from '../../actions/task_actions';
import TaskHybrid from './task_hybrid';

const mapStateToProps = (state, ownProps) => ({
  task: ownProps.navigation.state.params.task,
  userId: state.entities.user.id
});

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  createTask: task => dispatch(createTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskHybrid);
