import { connect } from 'react-redux';
import { fetchAllTasks } from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = state => ({
  tasks: Object.values(state.entities.tasks),
  state: state
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
