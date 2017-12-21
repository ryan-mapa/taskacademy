import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  render() {
    const task = this.props.task;
    return (
      <View>
        <Text>{task.title}</Text>
          <CheckBox
            title={<Text>Completed?</Text>}
            checked={task.completed}
            onIconPress={ this.toggleCompleted(task) } />
      </View>
    );
  }
}

export default TaskShow;
