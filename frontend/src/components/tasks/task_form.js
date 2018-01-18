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
    console.log('componentwillmount', this.props.task);
    if (this.props.task) {
      const task = this.props.task;
      this.setState({
        id: task.id,
        title: task.title,
        due_date: task.due_date ? new Date(task.due_date) : null,
        parent_id: task.parent_id
      });
    }
    // else if (this.props.parentId) {
    //   this.setState({ parent_id: this.props.parentId});
    // }
  }

  componentWillReceiveProps(newProps) {
    console.log('TaskForm.componentWillReceiveProps: newProps=', newProps);
    if (newProps.navigation.state.params.delete) {
      this.handleDelete(this.state.id);
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
    console.log('this state', this.state);
    let action = this.props.createTask;
    if (this.props.task) action = this.props.editTask;
    action(this.state)
      .then(createdOrEditedTask => {
        this.props.navigation.navigate('TaskShow', { taskId: createdOrEditedTask.task.data.id });
      })
      .then(() => this.props.closeModal());
    // if (this.props.task) {
    //   this.props.editTask(this.state)
    //       .then(() => this.props.navigation.goBack());
    // } else {
    //   this.props.createTask(this.state)
    //       .then(createdTask => {
    //         this.props.navigation.navigate('TaskShow', { taskId: createdTask.task.data.id });
    //       })
    //       .then(() => {
    //         this.props.closeModal();
    //       });
    // }
    // this.props.navigation.navigate('TaskIndex');
    // this.props.closeModal();
  }

  render() {
    console.log('state in form', this.state);
    const datepicker = this.displayDatePicker();
    return (
      <View>
        <View>
          <FormLabel>Title</FormLabel>
          <FormInput
            value={this.state.title ? this.state.title : null}
            placeholder={'Enter a title ...'}
            inputStyle={{color: 'blue', fontSize: 20}}
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
          title='Save'
          icon={ { name: 'save' } }
          backgroundColor='green'
          disabled={ !this.state.title }
          disabledStyle={{backgroundColor: 'gray'}}
          onPress={ () => this.handleSubmit() } />
      </View>
    );
  }
}

export default TaskForm;
