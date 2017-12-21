import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  navigateToShow(task) {
    this.props.navigation.navigate('TaskShow', { taskId: task.id });
  }

  render() {
    const task = this.props.task;
    return (
      <View>
        <Text style={ styles.title }>{ task.title }</Text>
        <CheckBox
          title={ "Completed?" }
          checked={ task.completed }
          onIconPress={ this.toggleCompleted(task) } />
        <Button
          small
          backgroundColor='green'
          icon={ { name: 'edit' } }
          title='Edit Task'
          onPress={ console.log('EDIT THIS!') } />
          {
            this.props.subtasks.map(subtask => (
              <CheckBox
                key={ subtask.id }
                title={ subtask.title }
                checked={ subtask.completed }
                onPress={ () => this.navigateToShow(subtask) }
                onIconPress={ this.toggleCompleted(subtask) } />
            ))
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  }
});

export default TaskShow;
