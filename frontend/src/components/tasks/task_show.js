import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

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
          title={"Completed?"}
          checked={task.completed}
          onIconPress={this.toggleCompleted(task)} />
        <Button
          small
          backgroundColor='green'
          icon={{name: 'edit'}}
          title='Edit Task'
          onPress={console.log('EDIT THIS!')} />
      </View>
    );
  }
}

export default TaskShow;
