import { connect } from 'react-redux';
import { editTask, createTask } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => ({
  task: ownProps.navigation.state.params.task
});

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
