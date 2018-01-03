import { connect } from 'react-redux';
import { editTask, createTask } from '../../actions/task_actions';
import { closeModal } from '../../actions/modal_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  if (ownProps['fromIndex']) {
    return (
      {
        task: null,
        parentId: undefined,
        userId: state.entities.user.id,
        navigation: ownProps.navigation
      }
    );
  }

  return (
    {
      task: ownProps.navigation.state.params.task,
      parentId: ownProps.navigation.state.params.parentId,
      userId: state.entities.user.id
    }
  );
};

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task)),
  createTask: task => dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
