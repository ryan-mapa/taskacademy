import { connect } from 'react-redux';
import { editTask } from '../../actions/task_actions';
import { selectSubTasks } from '../../reducers/selectors';
import TaskShow from './task_show';

const mapStateToProps = (state, ownProps) => ({
  task: state.entities.tasks[ownProps.navigation.state.params.taskId],
  subtasks: selectSubTasks(state, ownProps.navigation.state.params.taskId)
});

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskShow);