import React from 'react';
import { View, Text, StyleSheet, DatePickerIOS } from 'react-native';
import TaskIndexItem from './task_index_item';

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox,
  Button,
  Divider,
  Icon
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
        description: task.description,
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

  navigateToHybrid(task) {
    this.props.navigation.navigate('TaskHybrid', { task: task });
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

  displayDescription(editable) {
    if (this.state.description && !this.props.navigation.state.params.editable) {
      return (
        <View>
          <FormLabel>Description</FormLabel>
          <FormInput
            multiline={true}
            value={this.state.description ? this.state.description : null}
            placeholder={editable ? 'Enter a description...' : 'No description'}
            editable={editable}
            inputStyle={{color: editable ? 'red' : 'blue', fontSize: 16, width: '100%'}}
            onChangeText={(text) => this.setState({description: text})} />
        </View>
      );
    } else if (this.props.navigation.state.params.editable) {
      return (
        <View>
          <FormLabel>Description</FormLabel>
          <FormInput
            multiline={true}
            value={this.state.description ? this.state.description : null}
            placeholder={editable ? 'Enter a description...' : 'No description'}
            editable={editable}
            inputStyle={{color: editable ? 'red' : 'blue', fontSize: 16, width: '100%'}}
            onChangeText={(text) => this.setState({description: text})} />
        </View>
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

  displayButton() {
    if (this.props.navigation.state.params.editable) {
      return (
        <Button
          small
          title={'Save'}
          icon={{name: 'save'}}
          backgroundColor={'green'}
          disabled={ !this.state.title }
          disabledStyle={{backgroundColor: 'gray'}}
          onPress={ () => this.handleSubmit() } />
      );
    }
  }

  displaySubtasks() {
    if (!this.props.navigation.state.params.editable) {
      return (
        <View>
          <Divider style={{backgroundColor: 'gray',margin: 15}} />
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, marginRight: 10}}>Subtasks</Text>
            <Icon
              name='add-circle-outline'
              size={25}
              color='green'
              containerStyle={{marginRight: 20}}
              onPress={ () =>
                this.props.navigation.navigate('TaskHybrid',
                { parentId: this.props.task.id, editable: true }) } />
          </View>
          <View>
            {
              this.props.subtasks.map(subtask => (
                <TaskIndexItem
                  key={ subtask.id }
                  task={ subtask }
                  navigation={ this.props.navigation } />
                ))
            }
          </View>
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

    const task = this.props.task;
    const editable = Boolean(this.props.navigation.state.params.editable);
    const deadlineCheckbox = this.displayCheckbox(editable);
    const datepicker = this.displayDatePicker(editable);
    const saveButton = this.displayButton(editable);
    const subtasks = this.displaySubtasks(editable);
    const description = this.displayDescription(editable);

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
          {description}
        </View>

        <View>
          {deadlineCheckbox}
          {datepicker}
        </View>

        {saveButton}
        {subtasks}
      </View>
    );
  }
}

export default TaskHybrid;
