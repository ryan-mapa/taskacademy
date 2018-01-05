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
      this.setState({ due_date: null});
      this.props.navigation.setParams({edit:true});
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.navigation.state.params.delete) {
      this.handleDelete(this.state.id);
    }
  }

  displayCheckbox() {
    const hasDate = Boolean(this.state.due_date);
    if (this.props.navigation.state.params.edit) {
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
    } else if (this.props.task) {
      return (
        <CheckBox
          center
          iconType={'material'}
          uncheckedIcon={'event-note'}
          title={ hasDate ?
            `Deadline: ${this.state.due_date.toDateString()}` :
            'No deadline set'} />
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
    if (this.state.due_date && this.props.navigation.state.params.edit) {
      return (
        <DatePickerIOS
          mode={'date'}
          date={this.state.due_date}
          onDateChange={ (date) => this.setState({due_date: date}) } />
      );
    }
  }

  handleSubmit() {
    if (this.props.task) {
      this.props.editTask(this.state);
      this.props.navigation.setParams({ edit: false });
    } else {
      this.props.createTask(this.state);
    }
    // this.props.navigation.goBack();
  }

  handleDelete(taskId) {
    this.props.navigation.setParams( {delete: false} );
    this.props.deleteTask(taskId).then(
      () => this.props.navigation.goBack()
    );
  }

  render() {
    console.log('TaskHybrid.render: this.props =', this.props);

    const checkbox = this.displayCheckbox();
    const datepicker = this.displayDatePicker();

    const task = this.props.task;
    const edit = this.props.navigation.state.params.edit;
    if (task === undefined && edit) {
      return <View></View>;
    }

    return (
      <View>

        <View>
          <FormLabel>Title</FormLabel>
          <FormInput
            value={this.state.title ? this.state.title : null}
            placeholder={'Enter a title ...'}
            editable={edit ? true : false}
            caretHidden={edit ? false : true}
            inputStyle={edit ? {color: 'purple', fontSize: 20} : {color: 'blue', fontSize: 20}}
            onChangeText={(text) => this.setState({title: text})} />
        </View>

        <View>
          {checkbox}
          {datepicker}
        </View>

        <Button
          small
          title={edit ? 'Save' : 'Edit'}
          icon={edit ? {name: 'save'} : {name: 'edit'}}
          backgroundColor={'green'}
          disabled={ !this.state.title }
          disabledStyle={{backgroundColor: 'gray'}}
          onPress={edit ? () => this.handleSubmit() : () => this.props.navigation.setParams({edit: true})} />

      </View>
    );
  }
}

export default TaskHybrid;
