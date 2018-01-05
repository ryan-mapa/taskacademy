import { connect } from 'react-redux';
import { editTask, deleteTask } from '../../actions/task_actions';
import { selectRootTask } from '../../reducers/selectors';
import TaskFamilyTree from './task_family_tree';

const mapStateToProps = (state, ownProps) => ({
  rootTask: selectRootTask(state, ownProps.navigation.state.params.taskId)
});

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskFamilyTree);
