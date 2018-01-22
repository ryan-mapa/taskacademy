import React from 'react';
import { View, Text, StyleSheet, DatePickerIOS } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox,
  Button
} from 'react-native-elements';

class TaskHybrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.task) {
      const task = this.props.task;
      this.setState({
        id: task.id,
        owner_id: task.owner_id,
        title: task.title,
        due_date: task.due_date ? new Date(task.due_date) : null,
        parent_id: task.parent_id
      });
    } else {
      if (this.props.parentId) {
        this.setState({ parent_id: this.props.parentId});
      }
      this.setState({ owner_id: this.props.userId, due_date: null});
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.navigation.state.params.delete) {
      this.handleDelete(this.state.id);
    }
  }

  displayCheckbox() {
    const hasDate = Boolean(this.state.due_date);
    if (this.props.navigation.state.params.editable) {
      return (
        <CheckBox
          center
          checked={ hasDate }
          title={ hasDate ?
            `Deadline: ${this.state.due_date.toDateString()}` :
            'Set deadline?' }
          onIconPress={ () => hasDate ?
            this.setState({due_date: null}) :
            this.setState({due_date: new Date()}) } />
      );
    } else {
      return (
        <CheckBox
          center
          iconType={'material'}
          uncheckedIcon={'event-note'}
          title={ hasDate ?
            `Deadline: ${this.state.due_date.toDateString()}` :
            'No deadline set'} />
      );
    }
  }

  displayDatePicker() {
    if (this.state.due_date && this.props.navigation.state.params.editable) {
      return (
        <DatePickerIOS
          mode={'date'}
          date={this.state.due_date}
          onDateChange={ (date) => this.setState({due_date: date}) } />
      );
    }
  }

  displaySubtasks() {
    if (this.props.subtasks.length > 0 &&
      !this.props.navigation.state.params.editable) {
      return (
        <View>
          <Text>Subtasks</Text>
          {
            this.props.subtasks.map(subtask => (
              <CheckBox
                key={ subtask.id }
                title={ subtask.title }
                checked={ subtask.completed }
                onPress={ () => this.navigateToShow(subtask) }
                onIconPress={ () => this.toggleCompleted(subtask) } />
            ))
          }
        </View>
      );
    }
  }

  toggleCompleted(task) {
    task.completed = !task.completed;
    this.props.editTask(task);
  }

  handleSubmit() {
    if (this.props.task) {
      this.props.editTask(this.state);
      this.props.navigation.setParams({ editable: false });
    } else {
      this.props.createTask(this.state).then(
        () => this.props.navigation.goBack()
      );
    }
  }

  handleDelete(taskId) {
    this.props.navigation.setParams( {delete: false} );
    this.props.deleteTask(taskId).then(
      () => this.props.navigation.goBack()
    );
  }

  render() {

    const checkbox = this.displayCheckbox();
    const datepicker = this.displayDatePicker();
    // const subtasks = this.displaySubtasks();

    console.log('this.props', this.props);
    const task = this.props.task;
    const editable = Boolean(this.props.navigation.state.params.editable);

    return (
      <View>

        <View>
          <FormLabel>Title</FormLabel>
          <FormInput
            value={this.state.title ? this.state.title : null}
            placeholder={'Enter a title ...'}
            editable={editable}
            inputStyle={{color: editable ? 'red' : 'blue', fontSize: 20}}
            onChangeText={(text) => this.setState({title: text})} />
        </View>

        <View>
          {checkbox}
          {datepicker}
        </View>

        <Button
          small
          title={editable ? 'Save' : 'Edit'}
          icon={editable ? {name: 'save'} : {name: 'edit'}}
          backgroundColor={editable ? 'green' : 'blue'}
          disabled={ !this.state.title }
          disabledStyle={{backgroundColor: 'gray'}}
          onPress={editable ?
            () => this.handleSubmit() :
            () => this.props.navigation.setParams({editable: true})} />

      </View>
    );
  }
}

export default TaskHybrid;
