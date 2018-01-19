import { connect } from 'react-redux';
import { editTask, createTask, deleteTask } from '../../actions/task_actions';
import { selectSubTasks } from '../../reducers/selectors';
import TaskHybrid from './task_hybrid';

const mapStateToProps = (state, ownProps) => {
  let taskProps = {};
  let idProps = {
    parentId: ownProps.navigation.state.params.parentId,
    userId: state.entities.user.id
  };

  if (ownProps.navigation.state.params.task) {
    taskProps = {
      task: ownProps.navigation.state.params.task,
      subtasks: selectSubTasks(state, ownProps.navigation.state.params.task.id)
    };
  }
  
  return Object.assign(idProps, taskProps);
};

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskHybrid);
