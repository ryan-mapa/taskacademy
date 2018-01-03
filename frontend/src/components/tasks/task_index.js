import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import TaskShowContainer from './task_show_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  navigateToShow(task) {
    this.props.navigation.navigate('TaskShow', { taskId: task.id });
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  render() {
    console.log('render, props', this.props);
    return (
      <View>
        <Text style={ styles.title }>Hi { this.props.user.first_name }</Text>
          {
            this.props.tasks.map(task => (
              <View key={task.id} style={{marginBottom: 10}}>
              <CheckBox
                key={ task.id }
                title={ task.title }
                checked={ task.completed }
                onPress={ () => this.navigateToShow(task) }
                onIconPress={ this.toggleCompleted(task) } />
              <Icon
                name='delete'
                color='red'
                containerStyle={{right: -325, marginTop: -40, width: 25}}
                onPress={() => this.props.deleteTask(task.id)} />
              </View>
            ))
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center'
  }
});

export default TaskIndex;
