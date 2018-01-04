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
    console.log('props in form', props);
    this.state = { owner_id: props.userId };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.task) {
      const task = this.props.task;
      this.setState({
        id: task.id,
        title: task.title,
        due_date: new Date(task.due_date),
        parent_id: task.parent_id
      });
    } else if (this.props.parentId) {
      this.setState({ parent_id: this.props.parentId});
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

  handleSubmit() {
    console.log(this.props);
    if (this.props.task) {
      this.props.editTask(this.state)
          .then(() => this.props.navigation.goBack());
    } else {
      this.props.createTask(this.state)
          .then(createdTask => {
            this.props.navigation.navigate('TaskShow', { taskId: createdTask.task.data.id });
          })
          .then(() => {
            this.props.closeModal();
          });
    }
    // this.props.navigation.navigate('TaskIndex');
    // this.props.closeModal();
  }

  render() {
    console.log(this.state);
    const datepicker = this.displayDatePicker();
    return (
      <View>
        <View>
          <FormLabel>Title</FormLabel>
          <FormValidationMessage>Required</FormValidationMessage>
          <FormInput
            value={this.state.title ? this.state.title : null}
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

          {datepicker}
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
