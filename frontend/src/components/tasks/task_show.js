import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button, Icon } from 'react-native-elements';
import TaskForm from './task_form';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToForm = this.navigateToForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.navigation.state.params.edit) {
      this.props.navigation.navigate('TaskForm', { task: this.props.task });
      this.props.navigation.setParams({edit:false});
    }
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  navigateToForm(task) {
    if (this.props.navigation.state.params.edit) {
      this.props.navigation.navigate('TaskForm', { task: task });
      this.props.navigation.setParams({edit:false});
    }
    // if (prop instanceof Object) {
    // } else {
    //   this.props.navigation.navigate('TaskForm', { parentId: prop });
    // }
  }

  navigateToShow(task) {
    this.props.navigation.navigate('TaskShow', { taskId: task.id });
  }

  render() {
    console.log('TaskShow.render: this.props=', this.props);

    const task = this.props.task;
    if (task === undefined) {
      return (
        <View>
          {this.props.navigation.goBack()}
        </View>
      );
    }

    return (
      <View>
        <Text style={ styles.title }>{ task.title }</Text>
        <Text>{ task.due_date }</Text>
        <Text>{ task.description }</Text>
        <CheckBox
          title={ "Completed?" }
          checked={ task.completed }
          onIconPress={ this.toggleCompleted(task) } />
        <Button
          small
          backgroundColor='blue'
          icon={ { name: 'list' } }
          title='Task Family Tree'
          onPress={ () => this.handleSubmit() } />

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
