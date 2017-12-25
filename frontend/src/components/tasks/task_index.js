import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';
import TaskShowContainer from './task_show_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false }
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
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

  render() {
    console.log('render, props', this.props);
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
          onPress={ () => this.setState({ modalOpen: true }) }>
          <Text style={ styles.addButtonText }>
            +
          </Text>
        </TouchableOpacity>
        <Modal
          visible={ this.state.modalOpen }
          animationType='slide'>
          <Text>'Testing Modal'</Text>
          <TouchableOpacity onPress={ () => this.setState({ modalOpen: false })}>
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
