import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import TaskForm from './task_form';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToForm = this.navigateToForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  navigateToForm(prop) {
    if (prop instanceof Object) {
      this.props.navigation.navigate('TaskForm', { task: prop });
    } else {
      this.props.navigation.navigate('TaskForm', { parentId: prop });
    }
  }

  navigateToShow(task) {
    this.props.navigation.navigate('TaskShow', { taskId: task.id });
  }

  handleDelete(taskId) {
    this.props.deleteTask(taskId).then(
      () => this.props.navigation.goBack()
    );
  }

  render() {
    console.log('TaskShow.render: this.props=', this.props);

    const task = this.props.task;
    if (task === undefined) {
      return <View></View>;
    }

    if (this.props.navigation.state.params.edit) {
      this.navigateToForm(task);
    }

    return (
      <View>
        <Text style={ styles.title }>{ task.title }</Text>
        <CheckBox
          title={ "Completed?" }
          checked={ task.completed }
          onIconPress={ this.toggleCompleted(task) } />
        <Button
          small
          backgroundColor='blue'
          icon={ { name: 'add' } }
          title='Add'
          onPress={ () => this.navigateToForm(task.id) } />
        <Button
          small
          backgroundColor='green'
          icon={ { name: 'edit' } }
          title='Edit'
          onPress={ () => this.navigateToForm(task) } />
        <Button
          small
          backgroundColor='red'
          icon={ { name: 'delete' } }
          title='Delete'
          onPress={ () => this.handleDelete(task.id) } />
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

// {
//   this.props.subtasks.map(subtask => (
//     <CheckBox
//     key={ subtask.id }
//     title={ subtask.title }
//     checked={ subtask.completed }
//     onPress={ () => this.navigateToShow(subtask) }
//     onIconPress={ this.toggleCompleted(subtask) } />
//   ))
// }
