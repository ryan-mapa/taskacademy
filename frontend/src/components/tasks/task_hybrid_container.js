import { connect } from 'react-redux';
import { editTask, createTask, deleteTask } from '../../actions/task_actions';
import { selectSubTasks } from '../../reducers/selectors';
import TaskHybrid from './task_hybrid';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.navigation.state.params.task) {
    return ({
      task: ownProps.navigation.state.params.task,
      parentId: ownProps.navigation.state.params.parentId,
      subtasks: selectSubTasks(state, ownProps.navigation.state.params.task.id),
      userId: state.entities.user.id
    });
  } else {
    return ({
      parentId: ownProps.navigation.state.params.parentId,
      userId: state.entities.user.id
    });
  }
};

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskHybrid);
