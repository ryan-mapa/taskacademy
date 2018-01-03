import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal,
         Dimensions,
         ScrollView } from 'react-native';
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
      <View style={ { flex: 1 } }>
        <View style={ { flex: 0.5, justifyContent: 'center', alignContent: 'center' } }>
          <Text style={ styles.title }>Welcome { this.props.user.first_name }</Text>
        </View>

        <View style={ { flex: 10 } }>
          <ScrollView>
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
          </ScrollView>
        </View>

        <View style={ { position: 'absolute', bottom: 0, right: 0, backgroundColor: 'transparent' } }>
          <TouchableOpacity
            style={ styles.addButton }
            onPress={ () => this.toggleModal(true) }>
            <Text style={ styles.addButtonText }>+</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={ this.props.modalOpen }
          animationType='slide'>
          <TaskFormContainer fromIndex={ true } navigation={ this.props.navigation }/>
          <TouchableOpacity onPress={ () => this.toggleModal(false) }>
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
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 20,
    marginRight: '5%',
    marginBottom: '5%',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  }
});

export default TaskIndex;
