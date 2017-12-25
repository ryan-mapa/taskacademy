import { connect } from 'react-redux';
import { createTask, editTask } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
