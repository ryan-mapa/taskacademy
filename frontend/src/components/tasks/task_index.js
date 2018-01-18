import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Dimensions,
         ScrollView } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';
import TaskShowContainer from './task_show_container';
import TaskFormContainer from './task_form_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToHybrid = this.navigateToHybrid.bind(this);
    this.state = { editedTask: null };
  }

  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  navigateToHybrid(task) {
    this.props.navigation.navigate('TaskHybrid', { task: task });
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  render() {
    let taskForm;
    if (!this.state.editedTask) {
      taskForm = (
        <TaskFormContainer new={ true } navigation={ this.props.navigation }/>
      );
    } else {
      console.log('inside the else in task index task form');
      taskForm = (
        <TaskFormContainer task={ this.state.editedTask } navigation={ this.props.navigation }/>
       );
    }

    return (
      <View style={ { flex: 1 } }>
        <View style={ { flex: 0.5, justifyContent: 'center', alignContent: 'center' } }>
          <Text style={ styles.title }>Welcome { this.props.user.first_name }</Text>
        </View>

        <View style={ { flex: 10 } }>
          <ScrollView>
            {
              this.props.tasks.map(task => (
              <View key={task.id} style={{marginBottom: 10}}>
                <CheckBox
                  title={ task.title }
                  checked={ task.completed }
                  onPress={ () => this.navigateToHybrid(task) }
                  onLongPress={ () => this.navigateToHybrid(task) }
                  onIconPress={ this.toggleCompleted(task) } />
                <Icon
                  name='delete'
                  color='red'
                  containerStyle={{right: -325, marginTop: -40, width: 25}}
                  onPress={() => this.props.deleteTask(task.id)} />
              </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center'
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 20,
    marginRight: '5%',
    marginBottom: '5%',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  }
});

export default TaskIndex;
