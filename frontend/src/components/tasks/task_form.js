import React from 'react';
import { View, Text, StyleSheet, DatePickerIOS } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox,
  Button
} from 'react-native-elements';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { owner_id: props.userId };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.task) {
      const task = this.props.task;
      this.setState({
        title: task.title,
        due_date: task.due_date,
        parent_id: task.parent_id
       });
    }
  }

  handleSubmit() {
    if (this.props.task) {
      this.props.editTask(this.state);
    } else {
      this.props.createTask(this.state);
    }
  }

  displayDatePicker() {
    if (this.state.due_date) {
      return (
        <DatePickerIOS
          mode={'date'}
          date={this.state.due_date}
          onDateChange={(date) => this.setState({due_date: date})} />
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <View>
          <FormLabel>Title</FormLabel>
          <FormValidationMessage>Required</FormValidationMessage>
          <FormInput
            placeholder={'Enter a title ...'}
            onChangeText={(text) => this.setState({title: text})} />
        </View>

        <View>
          <CheckBox
            title={ 'Does this have a deadline?' }
            checked={ Boolean(this.state.due_date) }
            onIconPress={ () => this.state.due_date ?
              this.setState({due_date: null}) :
              this.setState({due_date: new Date()}) } />

          {this.displayDatePicker()}
        </View>

        <Button
          small
          backgroundColor='green'
          icon={ { name: 'save' } }
          title='Save'
          onPress={ () => this.handleSubmit() } />
      </View>
    );
  }
}

export default TaskForm;

// Tasks/app/components/EditTask/index.js
