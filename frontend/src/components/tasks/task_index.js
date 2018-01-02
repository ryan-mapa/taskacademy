import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';
import TaskShowContainer from './task_show_container';
import TaskFormContainer from './task_form_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log('index props', props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  navigateToShow(task) {
    this.props.navigation.navigate('TaskShow', { taskId: task.id });
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  toggleModal(boolean) {
    boolean ? this.props.openModal() : this.props.closeModal();
  }

  render() {
    return (
      <View>
        <Text style={ styles.title }>Hi { this.props.user.first_name }</Text>
          {
            this.props.tasks.map(task => (
              <CheckBox
                key={ task.id }
                title={ task.title }
                checked={ task.completed }
                onPress={ () => this.navigateToShow(task) }
                onIconPress={ this.toggleCompleted(task) } />
            ))
          }
        <TouchableOpacity
          style={ styles.addButton }
          onPress={ () => this.toggleModal(true) }>
          <Text style={ styles.addButtonText }>
            +
          </Text>
        </TouchableOpacity>
        <Modal
          visible={ this.props.modalOpen }
          animationType='slide'>
          <TaskFormContainer fromIndex={ true } navigation={ this.props.navigation }/>
          <TouchableOpacity onPress={ () => this.toggleModal(false)}>
            <Text>X</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center'
  },
  addButton: {
    width: 50,
    height: 50,
    borderColor: 'white',
    backgroundColor: 'green'
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center'
  }
});

export default TaskIndex;
