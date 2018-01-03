import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal } from 'react-native';
import { CheckBox, Button, Icon } from 'react-native-elements';
import TaskShowContainer from './task_show_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, task: null }
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
    if (this.props.navigation.state.params) {
      setTimeout(this.props.deleteTask(this.props.navigation.state.params.taskIdToDelete), 5000);
    }
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
              <View key={task.id} style={{marginBottom: 10}}>
              <CheckBox
                key={ task.id }
                title={ task.title }
                checked={ task.completed }
                onPress={ () => this.navigateToShow(task) }
                onIconPress={ this.toggleCompleted(task) }
                onLongPress={ () => this.props.deleteTask(task.id) } />
              <Icon
                name='delete'
                color='red'
                containerStyle={{right: -325, marginTop: -40, width: 25}}
                onPress={() => this.props.deleteTask(task.id)} />
              </View>
            ))
          }
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
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default TaskIndex;
