import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from 'react-native-elements';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { owner_id: props.userId };
    this.placeholders = {
      title: 'Enter a title ...'
    }
  }

  componentWillMount() {
    console.log('task form mounting');
    if (this.props.task) {
      console.log('TASK UP IN HERE', this.props.task);
      const task = this.props.task;
      this.setState({ title: task.title });
    }
  }

  render() {
    console.log('taskform: render', this.state);
    return (
      <View>
        <Text>INSIDE THE TASK FORM</Text>
        <View>
          <FormLabel>Title</FormLabel>
          <FormValidationMessage>Required</FormValidationMessage>
          <FormInput value={this.placeholders.title}/>
        </View>
        <Button title='Save' />
      </View>
    );
  }
}

export default TaskForm;
