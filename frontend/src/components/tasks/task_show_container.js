import { connect } from 'react-redux';
import TaskShow from './task_show';

const mapStateToProps = (state, ownProps) => ({
  task: state.entities.tasks[ownProps.navigation.state.params.taskId]
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, null)(TaskShow);
