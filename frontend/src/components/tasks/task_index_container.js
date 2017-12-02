import { connect } from 'react-redux';
import { fetchAllTasks } from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = state => ({
  tasks: Object.values(state.entities.tasks)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: () => dispatch(fetchAllTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
