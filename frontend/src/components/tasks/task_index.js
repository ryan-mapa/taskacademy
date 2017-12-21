import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import TaskShowContainer from './task_show_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
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
        <Text>Hi {this.props.user.first_name}</Text>
          {
            this.props.tasks.map(task => (
              <CheckBox
                key={task.id}
                title={task.title}
                checked={task.completed}
                onPress={ () => this.navigateToShow(task) }
                onIconPress={ this.toggleCompleted(task) } />
            ))
          }
      </View>
    );
  }
}

export default TaskIndex;
