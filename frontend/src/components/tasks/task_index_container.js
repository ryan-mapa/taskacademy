import { connect } from 'react-redux';
import { fetchAllTasks } from '../../actions/task_actions';
import { fetchUser } from '../../actions/user_actions';
import TaskIndex from './task_index';

const mapStateToProps = state => ({
  tasks: Object.values(state.entities.tasks),
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
