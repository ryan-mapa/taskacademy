import { connect } from 'react-redux';
import { editTask, createTask } from '../../actions/task_actions';
import { closeModal } from '../../actions/modal_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  console.log('ownprops in container', ownProps);
  if (ownProps['new']) {
    return (
      {
          task: null,
          parentId: undefined,
          userId: state.entities.user.id,
          navigation: ownProps.navigation
      }
    );
  } else if (ownProps.navigation.state.params) {
    return {
      userId: state.entities.user.id,
      task: ownProps.navigation.state.params.task,
      parentId: ownProps.navigation.state.params.parentId
    };
  } else {
    return {
      userId: state.entities.user.id,
      parentId: undefined
    };
  }
};

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  createTask: task => dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
